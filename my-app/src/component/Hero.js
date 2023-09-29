import React from "react";
import logo from './Healthy-Food-Diet.png';

function Hero() {
  return (
    <section className="hero">
      <img src={logo} alt="Logo"  className="photo"/>
      
<ul>
      <h1 className="header">Tips for Healthy Food</h1>
      <li className="text">Base your meals on higher fiber starchy carbohydrates</li>
      <li>Eat lots of fruits and vegetables</li>
      <li>Do not skip breakfast</li>
      </ul>
    </section>
  );
}

export default Hero;