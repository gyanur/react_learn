import React, { useState } from 'react';
import { json } from 'react-router-dom';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function Save()
  {
      console.log({name,email,mobile});
      let data ={name,email,mobile}
       fetch("https://jsonplaceholder.typicode.com/comments" ,{
         method:'post',
        headers:{
           'Accept': 'application/json',
        'content-type':'application/json'
       },
      body:JSON.stringify(data)
       }).then((result)=>{
        console.log("result",result);

      })
  }

  return (
    <div className="App">
      <h1>post API Example</h1>
      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" /><br /><br />
      <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /><br /><br />
      <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} name="mobile" /><br /><br />
      <button type="button" onClick ={Save}> new</button>
    </div>
  );
}

export default App;