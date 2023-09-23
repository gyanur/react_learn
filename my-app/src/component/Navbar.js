import React from 'react';
import logo from './applebees-png-logo-6502.png';
import  "./style.css";

function Navbar() {
  return (
    
    <nav>
      <img src={logo} alt="Logo" />
      <h3 className='box'> HealthyFood</h3>
    </nav>

  );
}

export default Navbar;
