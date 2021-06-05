import React,{useState} from 'react'
import Navbar from './navbar'
import { useHistory } from "react-router-dom";
const Contact=()=>{
    let history = useHistory();
    const[Name,setName]= useState('')
    const[Email,setEmail]= useState('')
    const[PhoneNo,setPhoneNo]= useState('')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePhoneNo=(e)=>{
        setPhoneNo(e.target.value)
    }
     const [Display,setDis]=useState('')
         const DisFunc=(e)=>{
        setDis(`Name:${Name},Email:${Email},PhoneNo:${PhoneNo}`)
        setTimeout(() => {
            history.push('/')
        }, 2000);
         }
    return (
        <div>
            <Navbar />
            <br />
           <label>Name:</label>
            <input value={Name} onChange={handleName}/>{Name}<br />
            <label>Email:</label> 
            <input value={Email} onChange={handleEmail} />{Email}<br />
            <label>PhoneNo:</label>
            <input value={PhoneNo} onChange={handlePhoneNo}/>{PhoneNo}<br/> 
            <br /><button onClick={DisFunc}>Show!</button>
            <br />
            {Display}
        </div>
    )
}
export default Contact;