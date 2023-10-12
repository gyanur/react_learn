
import React, { useState} from 'react';
// import Axios from 'axios';

function File() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    // console.log('MyForm component is rendered');
  // The empty dependency array ensures this runs only once when the component mounts.

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/saveData', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email }),
      });


      if (response.ok) {
        console.log({name, email});
        // You can reset form fields or perform other actions here
      } else {
        console.error('Failed to save data.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default File;
