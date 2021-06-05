import React, { useState } from "react";
import Navbar from "./navbar";
import Sign from './sign';

const About = (props) => {
  console.log('props', props);
  const [Ali, setAli] = useState("1,2,3,4");
  const handleClick = () => {
    setAli("empty");
  };
  const [count, setCount] = useState(0);
  const handleChange = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handleRemove = () => {
    if (count > 5) {
      setCount(count - 1);
    }
  };
  const [Omar, setOmar] = useState("");
  const umair = (e) => {
    setOmar(e.target.value);
  };
  const [Arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [text, setText] = useState("");
  const addArr = () => {
    if (text !== "") {
      setArr([...Arr, text]);
      setText("");
    }
  };
  const msg = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <br />
      {Ali}
      <button onClick={handleClick}>click!</button>
      <br />
      {count}
      <button onClick={handleChange}>Add!</button>
      <br />
      <button onClick={handleRemove}>Del!</button>
      <input value={Omar} onChange={umair} />
      {Omar}
      {Arr.map((value, i) => {
        return (
          <li>
            {value},{i}
          </li>
        );
      })}
      <button onClick={addArr}>addArray!</button>
      <input value={text} onChange={msg} />
      <br/>
      <h1>Form Data</h1>
      {props.formData}
      <Sign count={count} />
    </div>
  );
};

export default About;
