// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [x2count, setx2Count] = useState(1);
  const increment = () =>{
    setCount(count + 1);
  }
  const x2 = () => {
    setx2Count(x2count + 2);
  }
  return (
   <>
   <div>
   <button onClick={increment}>ClickMe</button>
   <p>Click {count}</p>
   </div>
   <div>
    <button onClick={x2}>2 lan</button>
    <p>Click {x2count}</p>
   </div>
   </>
  );
}

export default App;
