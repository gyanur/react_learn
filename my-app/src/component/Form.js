import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState(

    { firstName: "", lastName: "",email: "",comment: "", isFriendly: true }

  );

   function handleChange(event) {
     const { name, value } = event.target;
      setFormData(prevFormData => ({
      ...prevFormData,
        [name]: value
    }));
  }
   
return (

 <form>
    <input
      type="text"
      placeholder="First Name"
      onChange={handleChange}
      name="firstName" // Corrected the name attribute here
      value={formData.firstName}
    />

    
    <input
      type="text"
      placeholder="Last Name"
      onChange={handleChange}
      name="lastName" // Corrected the name attribute here
      value={formData.lastName}
    />
    
    <input
      type="email"
      placeholder="Email"
      onChange={handleChange}
      name="email" // Corrected the name attribute here
      value={formData.emailName}
    />

    <textarea 
    value={formData.comments}
    placeholder="comments"
    onChange={handleChange}
    name="comment"
    />
    <input type="checkbox" 
    id="isFriendly"
    checked={formData.isFriendly}/>


    <label htmlFor="isFriendly"> Are you isFriendly?</label>
    <br/>
    <br/>

  

    <input
    type="radio"
    id="unemployed"
    />

    <label htmlFor="unemployed">unemployed</label>
    <br/>



    <input
    type="radio"
    id="unemployed"
    />

    <label htmlFor="unemployed">part-time</label>
    <br/>

    <input
    type="radio"
    id="unemployed"
    />

    <label htmlFor="unemployed">full-time</label>
    <br/>





</form>
  );
}
