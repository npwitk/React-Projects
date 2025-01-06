import { useState } from "react";


const UseStateBasics = () => {

  // console.log(useState(1));
  // const value = useState("hello");

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  


  return (
  <div>
    <h2>You clicked {count} times</h2>
    <button className = "btn" onClick = {handleClick}>Increase</button>
  </div>
  );
};

export default UseStateBasics;
