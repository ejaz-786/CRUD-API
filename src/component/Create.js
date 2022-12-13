import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

   let navigate = useNavigate();
    const getDetail = (e) => {
      e.preventDefault();
      let payload ={name,email,phone}
      fetch("http://localhost:8000/posts",
      {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)    
      }
      )
      .then((response) => response.json())
      .then((data) =>{alert("data saved successfully...");
       navigate("/")
    });
    }


  return (
    <div>
      <form action='#' onSubmit={getDetail}>
      <input onChange={(e)=>setId(e)}>id</input>
      <input onChange={(e)=>setName(e)}>name</input>
      <input onChange={(e)=>setEmail(e)}>email</input>
      <input onChange={(e)=>setPhone(e)}>phone</input>
      <input type="submit">save</input>
      
      </form>
    </div>
  )
}

export default Create
