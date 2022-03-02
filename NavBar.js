import React from 'react';
import Group from "../../assets/Group.png";
import './NavBar.css'


const NavBar = () => {
  return <div className='Topleft'>
        <div className='LogoName'>
            <img src={Group} alt='group'></img>
          <div className='Sen'>Sencha</div>
        </div>
        <div className='Theway'>
          <div className='I'>|</div>
          <div className='The'>The Way Money Grows</div>
        </div>
      </div>;
};

export default NavBar;
