import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
// import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header () {
   const handleSearch = (e) => {
      e.preventDefault();
      console.log('...')
   }
     return (
    <div className="head container d-flex">
      <Link to={"/"} className="navbar-brand mt-4">
      <FaBookBookmark size={40} className="me-2 py-1" />
      Sách Vui
      </Link>
     <div className="d-flex ">
     <div className="">
                    <form className=" d-flex align-items-center" style={{marginLeft:'300px'}}>
                        <input
                            type="search"
                            placeholder="Enter product name"
                            className="form-control"
                            style={{paddingRight: '200px', marginTop:'24px' }}
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
      {/* <div className="d-flex" style={{marginLeft:'80px', marginTop:'25px'}}>
      <a href="#" className="navbar-brand">
            <FaUserAlt size={30} className=" py-1" style={{marginLeft:'20px',marginBottom:'5px'}} />
            <p className="cart">Tài Khoản</p>
         </a>
      </div> */}

     </div>
    </div>
     )
}