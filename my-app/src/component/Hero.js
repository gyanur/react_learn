import React from "react";
import logo from './clip.png';

function Hero(){
return(
    <section className="hero">

    <img src={logo} alt="Logo" className="photo" />

        <h1 className="header"> Tips for Healthyfood</h1>
        <p className="text">Base your meals on higher fiber starchy carbohydrates</p>
        <p>Eat lots of fruits and vegitables</p>
        <p>Do not skip breakfast</p>


    </section>
)
}
export default Hero;