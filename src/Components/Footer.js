import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer--pin'>
    <div className='footer-container'>
        <p className='footer-subscription-heading'>
          Save Energy with ElectrifyU!!
        </p>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Disconnect
              <img className = "logo" src= "./images/disconnect_logo.PNG" />
            </Link>
          </div>
          <small class='website-rights'>ElectirfyU © 2021</small>
          
        </div>
      </section>
    </div>
    </footer>
  );
}

export default Footer;