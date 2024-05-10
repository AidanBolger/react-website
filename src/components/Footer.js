import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <small class='website-rights'>Aidan Bolger © 2023</small>
        <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/aidanbolgerr/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
              class='social-icon-link git'
              to='https://github.com/AidanBolger'
              target='_blank'
              aria-label='Git'
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://linkedin.com/in/aidan-bolger'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
        </div>
    </div>
  );
}

export default Footer;