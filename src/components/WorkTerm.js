import React from 'react'
import './About.css'

function WorkTerm() {
  return (
    <div className="cards" id="cards-section">
      <div className="cards-inner">
        <header className="card-header">
          <h1>Work Term Report – Summer 2026</h1>
          <h2>Co-op Student – IT Investment Technology</h2>
        </header>

        <section className="card-section">
          <p className="workterm">As a Co-op Student on the Investment Technology team, I worked on resolving incidents, debugging production issues, and supporting the code side of the business. My responsibilities included investigating bugs, implementing fixes, reviewing and understanding existing codebases, and contributing to ongoing development tasks. During the term, I completed over 20 incidents and support tasks, delivered one team demo, and created technical documentation to support knowledge sharing within the team.</p>
          <div className="image-container">
            <img alt="Equitable Logo" src="images/equitable-logo.jpg" />
          </div>
        </section>

        <section className="card-section">
          <h2>About My Employer</h2>
          <p className="workterm">Equitable is a Canadian financial services company that provides insurance, investment, and wealth management solutions. During my co-op term, I worked on the Investment Technology team, supporting systems and applications used across the business.</p>
        </section>

        <section className="card-section">
          <h2>Goals - These goals were made for my whole 8 month term</h2>
          <ul className="goals-list">
            <li>
              <p className="goal-text"><span className="goal-title">Develop a Strong Understanding of Equitable’s Existing Systems</span> - Independently diagnose and resolve at least 20 bugs, tasks, or incidents, delivering reliable fixes that meet team quality standards and require minimal rework.</p>
              <p className="goal-reflection"><span className="reflection-label">Reflection:</span> Over my term I was able to identify and resolve 35+ bugs and incidents, demonstrating a strong ability to troubleshoot and resolve technical issues efficiently.</p>
            </li>
            <li>
              <p className="goal-text"><span className="goal-title">Become a More Effective Communicator and Collaborator</span> - Lead at least two team demos or presentations to communicate my work, while actively contributing to discussions and collaborating effectively throughout the term.</p>
              <p className="goal-reflection"><span className="reflection-label">Reflection:</span> I was able to lead two team demos and actively participate in discussions, which helped me become a more effective communicator and collaborator.</p>
            </li>
            <li>
              <p className="goal-text"><span className="goal-title">Build an Understanding of Business Processes</span> - Produce at least five clear and useful documentation resources that help improve team understanding and knowledge sharing.</p>
              <p className="goal-reflection"><span className="reflection-label">Reflection:</span> I created three documentation resources that were well-received; team priorities shifted afterward.</p>
            </li>
            <li>
              <p className="goal-text"><span className="goal-title">Achieve 99.99%+ daily price availability.</span></p>
              <p className="goal-reflection"><span className="reflection-label">Reflection:</span> This goal was not completed due to changing business priorities.</p>
            </li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Skills Learned</h2>
          <p className="workterm">Throughout my co-op term, I strengthened my programming and problem-solving abilities while working primarily with Python and learning concepts related to functional programming with F#.</p>
        </section>

        <section className="card-section">
          <h2>My Favourite Part of the Experience</h2>
          <p>My favourite part of the experience was connecting with the other COOP students and building strong professional relationships. I even won the end-of-term ping-pong tournament!</p>
          <div className="image-container">
            <img alt="Photo of COOP students" src="images/coop-students.jpg" />
          </div>
        </section>

        <section className="card-section">
          <h2>Conclusions</h2>
          <p className="workterm">The term taught me how software development supports business operations in financial services and strengthened both my technical and collaboration skills.</p>
        </section>

      </div>
    </div>
  )
}

export default WorkTerm
