import React, { Component } from 'react';
import './footer.css';
import logo from '../../assets/SenchaLogo.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import social from '../../assets/social media.png';

function footer(){
    return(
      <div className='footer'>
        <img src={logo} alt="" className='logo' />
        <h1 className='main'>Sencha</h1>
        <p className='trick'>Sencha’s simple API does the trick.	</p>
        <div className='links'>
          <p className='one fr'>How it works</p>
          <p className='two fr'>Mission</p>
          <p className='three fr'>Education</p>
          <p className='four fr'>Contact Us</p>
          <p className='five fr'>Privacy & Terms</p>
        </div>
        <div className='contactDetails'>
          <img src={icon1} alt="" className='icon1' />
          <p className='address'>Tennyson Rochester, Michigan</p>
          <img src={icon2} alt="" className='icon2' />
          <p className='phone'>+1 (508) 782- 3218</p>
          <img src={social} alt="" className='social' />
        </div>
      </div>
    )
}

export default footer;