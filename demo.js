import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [books, setBooks] = useState([]); // State to store data from books.json

  useEffect(() => {
    // Fetch data from the books.json file when the component mounts
    fetch('http://localhost:3312/books')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setBooks(data)
      })
      .catch(error => console.error('Error:', error));
  }, []);
  console.log(books);
  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {books?.map(book => (
          <div key={book.id} style={{ width: '30%', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={book.image} alt={book.title} style={{ width: '100%' }} />
            <h3>{book.title}</h3>
            <p>Price: ${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;