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
        <br></br>
        <h1>Goals - These goals were made for my whole 8 month term</h1>
        <p>Develop a Strong Understanding of Equitable’s Existing Systems - Independently diagnose and resolve at least 20 bugs, tasks, or incidents, delivering reliable fixes that meet team quality standards and require minimal rework.</p>
        <p>Become a More Effective Communicator and Collaborator - Lead at least two team demos or presentations to communicate my work, while actively contributing to discussions and collaborating effectively throughout the term.</p>
        <p>Build an Understanding of Business Processes - Produce at least five clear and useful documentation resources (e.g., system overviews, process guides) that help improve team understanding and knowledge sharing.</p>
        <p>Achieve 99.99%+ daily price availability.</p>
       
        <h1>Skills Learned</h1>
        <p className='workterm'>Throughout my co-op term, I strengthened my programming and problem-solving abilities while working primarily with Python and learning 
          concepts related to functional programming with F#. I gained valuable experience debugging production issues, analyzing existing systems, and implementing reliable 
          fixes for incidents and bugs. I also improved several professional skills, including communication, collaboration, and time management. Working within an agile 
          environment taught me how to prioritize tasks effectively, participate in sprint planning, and adapt to changing priorities. Additionally, I developed stronger 
          documentation skills through creating technical documentation and presenting my work in a team demo. One of the most valuable aspects of the term was 
          learning how software development supports business operations in the financial industry. I gained experience understanding both the technical and business 
          sides of investment technology systems while working closely with teammates to solve problems efficiently.</p>

        <h1>My Favourite Part of the Experience</h1>
        <p>My favourite part of the experience was befriending all of the other COOP students and building strong professional relationships.
          There were 16 total studends this term and I got to know all of them really well. We had an end of term Ping Pong tournament and I won the whole thing! It was a great way to bond with everyone and have fun outside of work. 
        </p>

        <div className="image-container">
            <img alt='Photo of COOP students'
            src='images/coop-students.jpg'/>
        </div>


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