import React from 'react';
import myAnimatedSVG from '/public/eagle.svg'; // For SVG as an image
import '../App.css'


const Dashboard = () => {
    return (
        <>
            <div className="app">
                <img src={myAnimatedSVG} alt="Animated SVG" className='animated-image' />

            </div>
            <div className="content">
                <h1>Your Content Here</h1>
                <p>More content...</p>
            </div>
        </>


    )

}

export default Dashboard;