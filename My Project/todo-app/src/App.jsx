import { useState } from "react"
function App() {
  const [todos, setTodos] = useState([]); 
  const [addItem, setAddItem] = useState(""); // Mảng
  const handleChange = (e) => { // Dùng để xử lí input khi thay đổi thì render lại input 
    setAddItem(e.target.value);
  }
   const addTodos = () => {
    const todoCopied = [...todos];
    todoCopied.push(addItem);
    setTodos(todoCopied);
   }
   const removeTodos = (item) => {
    const deleteTodo = [...todos];
    deleteTodo.splice(item, 1)
    setTodos(deleteTodo)
   }
  return (
    <>
    <p>TODO List</p>
    <input type="text" value={addItem} onChange={e => handleChange(e)} />
    <button onClick={addTodos}> 
      Add 
    </button>
      <ul>
      {todos.map((todo) => (
          <li>{todo}
          <button onClick={removeTodos}>Delete</button>
          </li>
          ))}
        
      </ul>
    </>
  );
}

export default App;
