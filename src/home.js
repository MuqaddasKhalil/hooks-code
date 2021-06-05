import React from 'react'
import Navbar from './navbar'
import About from './About';

export default function home(props) {
    console.log('props', props);
    return (
        <div>
           home 
           <Navbar />
           <h1>Form Data</h1>
           {props.formData}
           <br/>
           <h1>About</h1>
           <About formData={props.formData} />
        </div>

    )
}
