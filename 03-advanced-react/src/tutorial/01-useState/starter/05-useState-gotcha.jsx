import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
