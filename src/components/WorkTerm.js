import React from 'react'
import CardItem from './CardItem'
import './About.css'

function Cards() {
  return (
    <div className='cards' id="cards-section">
        <h1>Work Term Report – Winter 2026</h1>
        <h1>
            Co-op Student – IT Investment Technology</h1>
        <p className='workterm'>As a Co-op Student on the Investment Technology team, I worked on resolving incidents, debugging production issues, and supporting the code
           side of the business. My responsibilities included investigating bugs, implementing fixes, reviewing and understanding existing codebases, and contributing to ongoing development tasks.
          During the term, I completed over 20 incidents and support tasks, delivered one team demo, and created technical documentation to support knowledge sharing within the team. 
          The role required technical problem-solving skills, effective communication, and the ability to work collaboratively in an agile software development environment.
          I primarily worked with Python while also gaining exposure to functional programming concepts through F#. This experience allowed me to expand my understanding of software 
          development practices and enterprise-level systems.
          Conclusions</p>
        
         <div className="image-container">
            <img alt='Equitable Logo'
            src='images/equitable-logo.jpg'/>
        </div>

         
        <h1>About My Employer</h1>
        <p className='workterm'>Equitable is a Canadian financial services company that provides insurance, investment, and wealth management solutions. 
          During my co-op term, I worked on the Investment Technology team, supporting systems and applications used across the business. The team focuses on 
          maintaining and improving production software, resolving incidents, and ensuring critical investment and pricing systems operate reliably. The environment
           emphasized collaboration, agile development practices, and continuous improvement in both technical and business processes.</p>
        <br></br>
        <h1>Goals</h1>
        <p>Develop a Strong Understanding of Equitable’s Existing Systems</p>
        <p>Become a More Effective Communicator and Collaborator</p>
        <p>Build an Understanding of Business Processes</p>
        <p>Improve Organization and Time Management Skills</p>
       
        <h1>Skills Learned</h1>
        <p className='workterm'>Throughout my co-op term, I strengthened my programming and problem-solving abilities while working primarily with Python and learning 
          concepts related to functional programming with F#. I gained valuable experience debugging production issues, analyzing existing systems, and implementing reliable 
          fixes for incidents and bugs. I also improved several professional skills, including communication, collaboration, and time management. Working within an agile 
          environment taught me how to prioritize tasks effectively, participate in sprint planning, and adapt to changing priorities. Additionally, I developed stronger 
          documentation skills through creating technical documentation and presenting my work in a team demo. One of the most valuable aspects of the term was 
          learning how software development supports business operations in the financial industry. I gained experience understanding both the technical and business 
          sides of investment technology systems while working closely with teammates to solve problems efficiently.</p>


        <h1>Conclusions</h1>
        <p className='workterm'>Throughout my co-op term, I strengthened my programming and problem-solving abilities while working primarily with Python and 
          learning concepts related to functional programming with F#. I gained valuable experience debugging production issues, analyzing existing systems, and 
          implementing reliable fixes for incidents and bugs. I also improved several professional skills, including communication, collaboration, and time management. 
          Working within an agile environment taught me how to prioritize tasks effectively, participate in sprint planning, and adapt to changing priorities. 
          Additionally, I developed stronger documentation skills through creating technical documentation and presenting my work in a team demo. One of the most valuable 
          aspects of the term was learning how software development supports business operations in the financial industry. I gained experience understanding both the 
          technical and business sides of investment technology systems while working closely with teammates to solve problems efficiently.</p>
    </div>
  )
}

export default Cards