import React from 'react'
//import SocialFollow from '../SocialFollow/SocialFollow';
import "./Card.css";


function Card() {
  return (
    <div class="card">
      <div class="image">
      <img src="image1.jpg" alt="women"></img>
      </div>

      <div className="container">
        <h1 class="name">C Venkata Saumya</h1>
        <h3 class="role">Full-Stack Web Developer</h3>
        <p class="website">saumya.website</p>
        
        <div className="about">
            <h1>About</h1>
            <p>I am a full-stack web developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>

        <div className="Interests">
            <h1>Interests</h1>
            <p>Food expert. Reader. Internet fanatic. Travel geek. Chai fanatic.</p>

        </div>

       
        
      </div>
      
      
     
      

      

    </div>
  )
}

export default Card