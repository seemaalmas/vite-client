import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const Poll = () => {
  const [pollOptions, setPollOptions] = useState([
    { id: 1, option: 'Option 1', votes: 0 },
    { id: 2, option: 'Option 2', votes: 0 },
    { id: 3, option: 'Option 3', votes: 0 },
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // Check if the user has already voted
    const voteStatus = localStorage.getItem('reactPollVoted');
    if (voteStatus) {
      setHasVoted(true);
      setPollOptions(JSON.parse(localStorage.getItem('reactPollOptions')));
    }
  }, []);

  const handleVote = (optionId) => {
    if (hasVoted) {
      alert('You have already voted!');
      return;
    }

    const updatedOptions = pollOptions.map((option) =>
      option.id === optionId ? { ...option, votes: option.votes + 1 } : option
    );

    setPollOptions(updatedOptions);
    setHasVoted(true);
    localStorage.setItem('reactPollVoted', 'true');
    localStorage.setItem('reactPollOptions', JSON.stringify(updatedOptions));
  };

  const data = {
    labels: pollOptions.map((option) => option.option),
    datasets: [
      {
        data: pollOptions.map((option) => option.votes),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Poll</h2>
      {pollOptions.map((option) => (
        <button key={option.id} onClick={() => handleVote(option.id)} disabled={hasVoted}>
          {option.option}
        </button>
      ))}
      <Pie data={data} />
    </div>
  );
};

export default Poll;
