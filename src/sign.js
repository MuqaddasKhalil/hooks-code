import React, { useEffect, useState } from "react";
import Navbar from './navbar'
const Sign = (props)=> {
  const [someVal, setSomeVal] = useState('');
  useEffect(() => {
    setSomeVal(props.count);
  }, [props.count])
  console.log('someVal', someVal);
  return (
  <div>
      sign
      {props.count}
      <Navbar />
      {someVal}
      </div>
)
}

export default  Sign;
