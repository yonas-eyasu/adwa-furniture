import React from 'react';
import './Team.css';
import team1 from './image/team1.jpg';
import team2 from './image/team2.jpg';
import team3 from './image/team3.jpg';
import facebook from './image/facebook.png'
import instagram from './image/instagram.png'
import linkedin from './image/linkedin.png'
import twitter from './image/twitter.png'

function Team() {
  return (
    <div className="team">
      <div className="team-header">
        <h2>Our Team</h2>
      </div>

      <div className="team-images">
        <div className='team team1'> <img src={team2} alt="Team member 1" className="team-image" />
        <div className='detail'>
            <div className='social'>
         <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
          <img src={linkedin} alt="social" />
          <img src={twitter} alt="social" />
         </div>
         
          </div>

          <div className='name '>
            <h1>Mr. Kebede <br/> Belachew </h1>
            <p>CEO</p>
          </div>

        </div>

        <div className='team team1'> <img src={team1} alt="Team member 2" className="team-image" />
          <div className='detail'>
         <div className='social'>
          <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
          <img src={linkedin} alt="social" />
          <img src={twitter} alt="social" />
         </div>
          
          </div>
          <div className='name '>
            <h1>Mr. Gostina <br/>  Shetachew</h1>
            <p>Product Manager.</p>
          </div>
        </div>
      
        <div className='team team1'> <img src={team3} alt="Team member 3" className="team-image" />
        <div className='detail'>
         <div className='social'>
         <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
          <img src={linkedin} alt="social" />
          <img src={twitter} alt="social" />
         </div>
          
          </div>
          <div className='name '>
            <h1>Ms. Sandra <br/>Williams</h1>
            <p>Marketing manager.</p>
          </div>
        </div>
          </div>
    </div>
  );
}

export default Team;

