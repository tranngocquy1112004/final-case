import React, {useContext} from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/search-context";
export default function Header () {
  const {dispatch} = useContext(SearchContext)
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
                           type="text"
                           placeholder="Search for products..."
                           style={{paddingRight: '200px', marginTop:'24px' }}
                            onInput={(e) => dispatch({
                              type: 'filters/searchText',
                              payload: e.target.value
                            })}
                        />
                        <FaSearch size={15} style={{ marginLeft: '-25px',marginTop:'24px', color: 'rgba(0,0,0,.2)' }} />
                    </form>
                    </div> 
                </div>
      <div className="d-flex" style={{marginLeft:'60px', marginTop:'20px'}}>
      <Link to={'/cart'} className="navbar-brand">
            <TiShoppingCart size={40} className=" py-1" style={{marginLeft:'10px'}} />
            <p className="cart">Giỏ hàng</p>
         </Link>
      </div>
     </div>
     )
}
