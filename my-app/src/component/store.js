import React, { useEffect, useState } from "react";
 function Store(){
 const [data,setData]=useState([])


useEffect (()=>{
    const url =" https://jsonplaceholder.typicode.com/comments" 
    
   fetch(url)
    .then(response => response.json()).then(json => {         
    console.log("jsonnn",json)
    
    setData(json)
      }).catch (e =>{
        document.write("e", e)
 })
    
 }, [])
    
    return(
    <div className ="m-6 p-2 ">
        <h1>welcome</h1>
        {
             data.map(item => {
             return(
                <div>{item.email}</div>
                        )
                     })
                 }
    
           </div> 
    
     );}
        
 export default Store;
    
    
    
    
    