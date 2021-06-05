import React, {useEffect, useState} from 'react'
import './todo.css'


const Todolistmap =(props)=> {
    const[Any,setAny]=useState([])
    useEffect(()=>{
       setAny(props.todolist);
    }, [props.todolist])
    return (
        <div>
            {Any.map((value, i) => {
             return (
                 <div>
                 <li>{value}</li>
                 <button onClick={() => props.handleDel(value)}>Del!</button>
                 <button onClick={() => props.handleEdit(value)}>Edit!</button>
                 </div>
             )
         })}
        </div>
    )
}
export default Todolistmap;