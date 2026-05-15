import React from 'react'
import CardItem from './CardItem'
import './About.css'

function Cards() {
  return (
    <div className='cards' id="cards-section">
        <h1>PROJECTS</h1>
        <br></br>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/clogonew.png'
                    text="8 Ball Physics Simulation"
                    label="C, Python, HTML, SQLite"
                    path='/8ball'
                    />
                    <CardItem 
                    src='images/Wolvesvsheepimg.jpg'
                    text="Java Wolves Vs Sheep Simulation"
                    label="Object Oriented"
                    path='/wolvesvsheep'
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