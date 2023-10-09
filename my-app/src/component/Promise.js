// Promise.js
import React from "react";
import Die from "./Die"; // Import the Die component using a relative path
import "./Prom.css";

export default function Promise() {
    



// function allNewDice(){
//     //  new array to hold me numbers
//     const newDice = []
//     for(let i=0;  i>10;  i++)
//     newDice.push(Math.floor(Math.rendom)*6)
//     // loop 10 times
//     //  push a random number from 1-6 my array
    

// return newDice 


function rollDice(){
    
    
}



// const diceElement= dice.map(die => <Die value={die}/>)
    return (
        <main>
            <div className="dice-container">
                <Die value="1" />
                <Die value="2" />
                <Die value="3" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="7" />
                <Die value="8" />
                <Die value="9" />
                <Die value="10" />
           {/* {diceElement} */}
           <div>
            <button className="btn btn-primary center-button"  onClick={rollDice}>Roll</button>
           </div>
            </div>
        </main>
    );
}
