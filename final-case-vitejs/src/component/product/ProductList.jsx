import React, { useEffect, useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { SearchContext } from '../../context/search-context';
import './ProductList.css';
import {fetchData} from "../../reducer/actions"
import Product from "./Product";


const ProductList = () => {
  const { state, dispatch } = useContext(SearchContext);
  const { products, filters: { searchText } } = state;

  useEffect(() => {
    async function getProductList() {
      try {
        let productRes = await fetch('http://localhost:3000/books');
        let data = await productRes.json();
        dispatch(fetchData(data))

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getProductList();
  }, []);
  function queryProducts() {
    let filteredProducts = [...products];
    if (searchText) {
      filteredProducts = filteredProducts.filter((p) => p?.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    return filteredProducts;
  }

  const filteredProducts = queryProducts();

  return (
    <div className="py-2 d-flex flex-column justify-content-center">
    <h5>Sản Phẩm Hiện Có:</h5>
    <div className="row">
        {
            filteredProducts?.map((book) => (
                <Product key={book.id} product={book} />
            ))
        }
    </div>
</div>
  );
};

export default ProductList;
