import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Homes.css';

function Homes() {
  return (
    <div className='hero-container'>
      <h1>Start Saving NOW</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default Homes;