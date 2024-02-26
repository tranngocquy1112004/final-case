import React from "react";
import { FaCartArrowDown, } from "react-icons/fa";
import ProductList from "./ProductList";

function Product({ book }) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card d-flex align-items-center pt-4">
                <img src={book?.image}
                    className="card-image-top" alt=""
                    style={{ width: "90%" }}
                />
                <div className="w-100 px-4 py-3">
                    <p className="fw-bolder text-center">{book?.title}</p>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="me-1">
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <del className="line-through me-2">${book?.price}</del>
                        </div>
                        <FaCartArrowDown size={20} className="btn-cart" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;