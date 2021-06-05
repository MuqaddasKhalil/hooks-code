import React, { useState } from 'react'
import Navbar from './navbar';
import Todolistmap from './todolist-map' 
import './todo.css'
 const Todolist=()=> {
     const [inputValue, setInputValue] = useState('');
     const[update,setUpdate] = useState('');
    const[Todo,setTodo]=useState([])
    const handleTodo=()=>{
        if(update ===''){
            setTodo([...Todo, inputValue]);
            setInputValue('');
        } else {
            const replaceIndex = Todo.indexOf(update);
            Todo.splice(replaceIndex,1, inputValue);
            setInputValue('')
            setUpdate('');
        }
    }
    const handleInputValue=e=>{
        setInputValue(e.target.value);
    }
    const handleDel=(a)=>{
        console.log('a', a);
        const filteredTodo= Todo.filter(todo => todo !== a);
        console.log('filteredTodo', filteredTodo);
        setTodo(filteredTodo)
    }
    const handleEdit=(t)=>{
      setInputValue(t)
      setUpdate(t)

    }
    return (
        <div>
            <Navbar /><br />
        <div className="input-div">
         <input className="input-field" value={inputValue} onChange={handleInputValue}/>
         <button className="input-button" onClick={handleTodo}>save!</button>
         </div>
         <br />
        <Todolistmap todolist={Todo} handleDel={handleDel} handleEdit={handleEdit}/>
    
        </div>
    )
}
export default Todolist;