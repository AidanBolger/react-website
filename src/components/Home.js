import React from 'react';
import '../App.css';
import './Home.css';

function Home() {

  return (
    <div className='hero-container'>
        <video src="/videos/AidanBolger.mp4" autoPlay muted />
        {/* <h1>Aidan Bolger</h1> */}
        <p>Software Engineering Student</p>
        <div className='hero-btns'>
          <i class="fa-solid fa-caret-down fa-beat"></i>
        </div>
    </div>
  )
}

export default Home;