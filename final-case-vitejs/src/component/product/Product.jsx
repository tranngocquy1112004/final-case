import React from "react";
import { FaCartArrowDown, } from "react-icons/fa";
function Product({ product  }) {
    console.log("book:", product);
    return (
        <div className="col-md-3 mb-4" >
            <div className="card d-flex align-items-center pt-4">
                <img src={product.image}
                    style={{ width: "90%" }}
                />
                <div className="w-100 px-4 py-3">
                    <p className="fw-bolder text-center">{product.title}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className>${product.price}
                        </p>
                        <span role="button">
                        <FaCartArrowDown size={20} className="btn-cart" />

                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;