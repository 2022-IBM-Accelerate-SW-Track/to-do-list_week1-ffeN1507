import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
            <div className="centered">
                <img 
                className="profile_image"
                // Image goes here
                alt="Profile Pic"
                ></img>
            </div>
        </div>
            <h1 style="color: lightblue">
                Roberto<br />Sanchez
            </h1>
        <p>Hello, my name is Roberto Sanchez (although most people just call me 
        Rob). I am a Computer Engineering major at the Universit of Houston-Clear 
        Lake and I plan to graduate in the Fall of 2023. Some of my interests 
        include playing volleyball, art, and playing video games.
        </p> 
      </div>
    )
  }
}
