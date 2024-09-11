import React from 'react'
import CardItem from './CardItem'
import './About.css'

function Cards() {
  return (
    <div className='cards' id="cards-section">
        <h1>Work Term Report - Summer 2024</h1>
        <p className='workterm'>During my summer work term at Glazier Medical Centre (GMC), I focused on advancing my skills in e-form development, online booking system support, and general IT 
            assistance within the healthcare setting. This report summarizes my key learning outcomes, technical challenges, and the technologies I engaged with, reflecting on how 
            these experiences have contributed to my professional growth.</p>
        
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
        <p className='workterm'>During my co-op term, I developed a range of valuable skills that will benefit my future career in IT. I gained in-depth 
            technical proficiency with the Ocean platform and Telus PS Suite, learning how to integrate these systems effectively to streamline workflows 
            between doctors and patients. My problem-solving abilities were enhanced as I tackled technical issues and communicated them clearly to both internal
             teams and external vendors. I also improved my time management and organizational skills by successfully prioritizing tasks and meeting deadlines. In 
             terms of communication, I strengthened both my written and oral skills, particularly through writing guides and leading training sessions. Additionally, 
             I honed my collaboration and teamwork abilities, working closely with physicians to develop custom e-forms and ensuring their needs were met. My decision-making 
             skills were tested as I learned when to ask questions and when to proceed independently, always ensuring the best outcomes for the projects I worked on. I 
             demonstrated initiative and leadership by taking ownership of e-form development projects, which improved efficiency in the clinic. Lastly, I gained a deeper 
             understanding of ethical reasoning, particularly in maintaining patient privacy and adhering to compliance regulations within the healthcare IT setting.</p>

        <h1>Job Description</h1>
        <p className='workterm'>As an IT Co-op Student, I worked on creating and integrating e-forms in the Ocean platform and Telus EMR, supporting staff and physicians 
            with IT-related tasks, and assisting in the implementation of online booking capabilities. The role required both technical skills and effective communication,
             particularly in documentation and teamwork. While some skills were developed in my academic studies, many were learned on the job, particularly in working with
             healthcare-specific technologies.</p>

        <h1>Conclusions</h1>
        <p className='workterm'>This work term allowed me to gain hands-on experience with healthcare IT systems and develop crucial skills in technological literacy, 
            communication, teamwork, and leadership. I believe that this experience has significantly contributed to my professional growth, and I am confident that it will 
            benefit my future career in IT. I would like to express my gratitude to Marion Streef, my supervisor, for her guidance and support throughout the term, as well as my 
            colleagues for their collaboration and assistance.</p>
    </div>
  )
}

export default Cards