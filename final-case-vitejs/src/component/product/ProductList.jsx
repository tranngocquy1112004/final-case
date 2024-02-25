import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import Header from '../header/Header';
import './ProductList.css'
const ProductList = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]); 
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data)
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
      setLoading(false);

  }, []);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

 
  // console.log(product)
  return (
    <div>
      <h3 style={{textAlign:'center', marginBottom:'50px'}}>Sản Phẩm Hiện Có</h3>
      {}
      <div className="product-container">
               {/* {filteredBooks.map((book) => (
                    <div key={book.id}>
                        <h2>{book.title}</h2>
                      <p>Price: ${book.price}</p>
                    </div> 

              ))} */}
                {/* {books?.map(book => (
                <div key={book.id} className='product-item' >
            <img src={book.image} alt={book.title} style={{ width: "200px", height: "200px", marginLeft:"80px"}}/>
            <h3 style={{fontSize:"15px",textAlign:'center'}}>{book.title}</h3>
            <div className='d-flex'>
                <p style={{marginLeft:"90px"}}>Price: ${book.price}
                </p>  */}
                {/* <span role='button' style={{marginLeft:'30px'}}  onClick={() => addToCart(book)}><FaShoppingCart/></span> */}
                </div>
            </div>
        // ))}
            // </div>
      //  </div>
  );
};
export default ProductList;
