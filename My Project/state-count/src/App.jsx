import {React, useState} from "react";
function App() {
  const [count, setCount] = (0);
  const increment = () =>{
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }
  return (
    <>
    <button onClick={increment}>+1</button>
    </>
  );
}

export default App;
