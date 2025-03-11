import React, { useEffect, useContext } from 'react';
import { SearchContext } from '../../context/search-context';
import { fetchData } from "../../reducer/actions";
import Product from "./Product";

const ProductList = (book) => {
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
    if (searchText) {
      return products.filter((product) => product?.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      return products;
    }
  }

  const filteredProducts = queryProducts();

  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Sản Phẩm Hiện Có:</h5>
      <div className="row">
        {filteredProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
