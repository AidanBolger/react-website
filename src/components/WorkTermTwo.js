import React from 'react'
import CardItem from './CardItem'
import './About.css'

function Cards() {
  return (
    <div className='cards' id="cards-section">
        <h1>Work Term Report - Fall 2024</h1>
        <p className='workterm'>During my extended fall work term at Glazier Medical Centre (GMC), I continued to focus on advancing my skills in e-form development, online 
          booking system support, and general IT assistance within the healthcare setting. This report summarizes my key learning outcomes, technical challenges, and the 
          technologies I engaged with, reflecting on how these experiences have contributed to my professional growth.</p>
        
         <div className="image-container">
            <img alt='GMC Logo'
            src='images/glaziermedical.jpg'/>
        </div>

         
        <h1>About My Employer</h1>
        <p className='workterm'>Glazier Medical Centre is a multidisciplinary medical practice offering comprehensive healthcare services. Located in Oshawa, Ontario, 
            GMC specializes in family medicine, with a strong emphasis on integrating technology to enhance patient care and streamline administrative processes. 
            The centre's use of platforms like the Ocean system and Telus EMR places it within the healthcare IT domain, where electronic health records and digital
             tools are essential for efficient operation. The IT department plays a crucial role in ensuring these systems run smoothly, supporting both patients and
              healthcare providers.</p>
        <br></br>
        <h1>Goals</h1>
        <p>Enhance Technological Literacy in e-Form Development</p>
        <p>Improve Written Communication Skills for IT Support Documentation</p>
        <p>Enhance Teamwork and Collaborative Skills in a Technical Environment</p>
        <p>Develop Leadership Skills through IT Support Coordination</p>
        <p>Improve Ethical Reasoning in Healthcare IT</p>
        <h1>Skills Learned</h1>
        <p className='workterm'>During my extended co-op term, I further enhanced my technical skills with the Ocean platform and Telus PS Suite, delving 
          into more complex technical challenges. I found effective ways to communicate solutions to a diverse group of stakeholders. Additionally, I sharpened my 
          abilities in time management, documentation, and organization. My leadership skills also saw significant growth as I took on more responsibilities in project
           management and decision-making, ensuring that our technology solutions effectively met both clinical and administrative needs.</p>

        <h1>Job Description</h1>
        <p className='workterm'>As an IT Co-op Student, I worked on creating and integrating e-forms in the Ocean platform and Telus EMR, supporting staff and physicians 
            with IT-related tasks, and assisting in the implementation of online booking capabilities. The role required both technical skills and effective communication,
             particularly in documentation and teamwork. While some skills were developed in my academic studies, many were learned on the job, particularly in working with
             healthcare-specific technologies.</p>

        <h1>Conclusions</h1>
        <p className='workterm'>This extended work term has been incredibly valuable for my growth in healthcare IT, helping me refine essential skills that will benefit
           my future career in IT. I'm truly thankful for the ongoing guidance and support from my supervisor, Marion Streef, and the teamwork with my colleagues. Their 
           support has been crucial to my professional development.</p>
    </div>
  )
}

export default Cards