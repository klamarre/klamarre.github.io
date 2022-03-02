import React from 'react';
import './Whatwedo.css'
import Rectangle from "../../assets/Rectangle.png";

const Whatwedo = () => {
  return <div className='Container'>
      <div className='frame'>
        <div className='rect'>
            <img src={Rectangle} alt='img'></img>
        </div>
        <div className='what'>
            <h2>What we do</h2>
            <div className='content'>
            Sencha is building the most intuitive way for Traditional financial institutions to access the power
            of Crypto and augment their providings to their customers. 
            </div>
        </div>
      </div>
  </div>;
};

export default Whatwedo;
