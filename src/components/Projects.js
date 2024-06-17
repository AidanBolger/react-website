import React from 'react'
import CardItem from './CardItem'
import './About.css'

function Cards() {
  return (
    <div className='cards' id="cards-section">
        <h1>PROJECTS</h1>
        <p>Welcome to my projects page! As a software engineering student with a passion for technology and innovation, 
            I've compiled a showcase of my work here. From academic assignments, personal experiments, and commissioned work, each project reflects my journey in software development. 
            Dive in to explore the applications I've built and the solutions I've crafted, each designed with a focus on functionality and user experience. Enjoy discovering 
            how I turn ideas into reality!</p>
        <br></br>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/clogonew.png'
                    text="8 Ball Physics Simulation"
                    label="C, Python, HTML, SQLite"
                    path='8ball'
                    />
                    <CardItem 
                    src='images/javalogonew.png'
                    text="Java"
                    label="Object Oriented"
                    path='/projects'
                    />
                </ul>
                {/* <ul className='cards__items'>
                    <CardItem 
                    src='images/pythonlogonew.png'
                    text="Python"
                    label="Versatile"
                    path='/projects'
                    />
                    <CardItem 
                    src='images/javascriptlogonew.png'
                    text="JavaScript"
                    label="Web"
                    path='/projects'
                    />
                </ul> */}
            </div>
        </div>
    </div>
  )
}

export default Cards