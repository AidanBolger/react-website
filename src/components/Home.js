import React, {useState, useEffect} from 'react';import '../App.css';
import './Home.css';
import {Link} from 'react-router-dom';
import { Button } from './Button';



function Home() {

  const [button, setButton] = useState(true);

  return (
    <div className='hero-container'>
        <video src="/videos/AidanBolger.mp4" autoPlay muted />
        {/* <h1>Aidan Bolger</h1> */}
        <p>Software Engineering Student</p>
        <div className='hero-btns'>
          {button && <Button buttonStyle='btn--outline--black' linkTo="/about">About Me</Button>}
        </div>
    </div>

    
  )
}

export default Home;