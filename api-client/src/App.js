import React, {useState,useEffect} from "react";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3050/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {books.map(book => (
          <div>
               <li key={book.id}>{book.title}</li>
               <img style={{ width: '100px',height:'100px' }} src={book.image} alt={book.title} />
          </div>
       

        ))}
      </ul>
    </div>
  );
}
export default App;

