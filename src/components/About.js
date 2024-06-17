import React from 'react'
import CardItem from './CardItem'
import './About.css'

function Cards() {
  return (
    <div className='cards' id="cards-section">
        <h1>ABOUT ME</h1>
        <p>I'm Aidan, a dedicated student in the Software Engineering Co-op program at the University of Guelph. I'm passionate about expanding my knowledge of coding and 
            emerging technologies. With an eye towards leveraging technology to streamline processes and enhance accessibility, I'm enthusiastic about making a positive impact 
            through my work.</p>
        <h2>SOME OF MY SKILLS</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/clogonew.png'
                    text="C"
                    label="Flexible"
                    path='/'
                    />
                    <CardItem 
                    src='images/javalogonew.png'
                    text="Java"
                    label="Object Oriented"
                    path='/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/pythonlogonew.png'
                    text="Python"
                    label="Versatile"
                    path='/'
                    />
                    <CardItem 
                    src='images/javascriptlogonew.png'
                    text="JavaScript"
                    label="Web"
                    path='/'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards