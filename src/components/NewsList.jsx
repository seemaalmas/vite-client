import '../App.css';
import "./News.css";
import './NewsList.css';

export default function NewsList({ data }) {

  return (

    <div className='row'>

      {data.map((post) => (
        <div className='column'>
          {
            post.map((item) => (
              
                <div className='image-container'>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className='image-text'>
                  <img src={item.urlToImage} alt={item.title} />
                  {/* <Link to="/your-path" className="overlay-text">Click Me</Link> */}
                  {/* <a href={item.title} target="_blank" rel="noopener noreferrer" className='image-text'>{item.title}</a> */}
                  <div class="content">
                    <p>{item.title}</p>
                  </div>
                  </a>
                </div>
             


            ))
          }
        </div>
      ))}

    </div>
  )


}
