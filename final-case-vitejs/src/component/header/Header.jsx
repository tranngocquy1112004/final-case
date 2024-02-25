import React, {useState, useEffect} from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
// import { FaUserAlt } from "react-icons/fa";
// import {FaShoppingCart} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header () {
   const [books, setBooks] = useState([]); // State để lưu trữ danh sách sản phẩm từ API
   const [searchTerm, setSearchTerm] = useState(""); // State để lưu trữ từ khóa tìm kiếm
   useEffect(() => {
      // Gọi API để lấy danh sách sản phẩm khi component được mount
      fetch("http://localhost:3000/books")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error("Error:", error));
    }, []);
    const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   const handleSearchChange = (e) => {
     setSearchTerm(e.target.value); // Cập nhật giá trị của từ khóa tìm kiếm
   };
   const handleSearch = (e) => {
      e.preventDefault();
      console.log("Searching for:", searchTerm);
   }
     return (
    <div className="head container d-flex">
      <Link to={"/"} className="navbar-brand mt-4">
      <FaBookBookmark size={40} className="me-2 py-1" />
      Sách Vui
      </Link>
     <div className="d-flex ">
     <div className="">
                    <form  onSubmit={handleSearch} className=" d-flex align-items-center" style={{marginLeft:'300px'}}>
                        <input
                           //  type="search"
                           //  placeholder="Enter product name"
                           //  className="form-control"
                           //  style={{paddingRight: '200px', marginTop:'24px' }}
                           //  value={searchTerm} // Giá trị của ô search được đặt là searchTerm
                           //  onChange={handleSearchChange} // Lắng nghe sự kiện onChange để cập nhật searchTerm
                           type="text"
                           placeholder="Search for products..."
                           style={{paddingRight: '200px', marginTop:'24px' }}
                           value={searchTerm}
                           onChange={handleSearchChange}

                        />
                        <FaSearch size={15} style={{ marginLeft: '-25px',marginTop:'24px', color: 'rgba(0,0,0,.2)' }} />
                    </form>
                   
                </div>

      <div className="d-flex" style={{marginLeft:'60px', marginTop:'20px'}}>
      <Link to={'/cart'} className="navbar-brand">
            <TiShoppingCart size={40} className=" py-1" style={{marginLeft:'10px'}} />
            <p className="cart">Giỏ hàng</p>
         </Link>
      </div>

     </div>
    </div>
     )
}
// {filteredBooks.map((book) => (
//    <div key={book.id}>
//   <h2>{book.title}</h2>
//   <p>Price: ${book.price}</p>
//   </div>
// ))}