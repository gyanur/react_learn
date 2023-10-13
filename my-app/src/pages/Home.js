import React, { useEffect, useState } from "react";
import "./index.css";
import landing from "./Landing_page.jpg"; // Import the image without the "./src/pages" part
import logo from "./logo.png"; // Import the image without the "./src/pages"
import { Box, Button, TextField, Typography, Card } from '@mui/material';




const Home = () => {
  // cont[name,]
  const[email,setEmail]=useState("");
  const[submmittedEmail,setSubmmittedEmail]=useState("");


  function server(){
    setSubmmittedEmail(email);
    setEmail("");
  }

  
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    <Box p={2} sx={{ width: '100%', height: '100vh', background: `url(${landing}) no-repeat`, backgroundSize: 'contain', objectPosition: 'centre' }}>
      <img src={logo} alt="logo.png" width='300'  font-size='40'/>
      <Box sx={{ display: 'flex', flexDirection: 'row' }} p={10} >
        <Box>
          <h1 sx={{ marginBottom: '20px', fontWeight: '900' }}>Supercharge your DevOps</h1>
          <h4>Get started with our tools</h4>
        </Box>
        <Card style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255 , 255, 255, 0.5)', marginLeft: 'auto', padding: '20px', height: '50vh', width: '400px' }}  >
          <p>your email is : <span  style={{fontWeight: 'bold'}}>{submmittedEmail}</span></p>
          <Box className='d-flex flex-column h-100'>
            <h3 className='highlight mb-auto'><b>Login</b></h3>
            <TextField
              variant="outlined"
              label="Enter your email"
              fullWidth
              sx={{ marginBottom: '20px', marginTop: 'auto', backgroundColor: 'white' }}
              value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"
            />
            <Button
              onClick={server}
              variant="contained"
              sx={{
              marginBottom: '20px',
                backgroundColor: '#1672EC',
                color: 'white',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#034EA2',
                
                },
              }}
            >
              Magic Sign In
            </Button>
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '15px' }}>or continue with</Typography>
            <Button
              variant="contained"
              sx={{
                marginBottom: 'auto',
                backgroundColor: '#1672EC',
                color: 'white',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#034EA2',
                },
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  </Box>
);
};

export default Home;