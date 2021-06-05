import React, { useState } from'react';
import Navbar from './navbar'
import Home from './home';
const Form=()=>{
    const[Email,setEmail]=useState('')
    const[Address,setAddress]=useState('')
    const[PhoneNo,setPhoneNo]=useState('')
    const[Name,setName]=useState('')
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    }
    const handlePhoneNo=(e)=>{
        setPhoneNo(e.target.value)
    }
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const[Display,setDis]=useState('')
    const displayFunc=(e)=>{
          setDis(`Email: ${Email}, Name: ${Name}, Adreess: ${Address}, Phone: ${PhoneNo}`)
      }
return(
<div>
    <Navbar />
    <br />
    <label>Email:</label>
    <input value={Email} onChange={handleEmail} />{Email}<br />
    <label>Address:</label>
    <input value={Address} onChange={handleAddress}/>  {Address}<br />
    <label>PhoneNo:</label>
    <input value={PhoneNo} onChange={handlePhoneNo}/>{PhoneNo}<br />
    <label>Name:</label>
    <input value={Name} onChange={handleName}/>{Name}<br />
    <br />{Display}  
    <button onClick={displayFunc}>Save!</button><br />
    <Home formData={Display}/>
</div>
)
}
export default Form;

