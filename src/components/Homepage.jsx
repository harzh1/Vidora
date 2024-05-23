import { useState, useEffect } from "react";

import Pagination from "./Pagination";
import Products from "./Products";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [tempProducts, setTempProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const limit = 12;

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    console.log(
      offset,
      limit,
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    );
    setTempProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [offset]);

  function onPageChange(i) {
    setOffset((i - 1) * limit);
    setCurrPage(i);
  }

  useEffect(() => {
    if (!loading) {
      setProducts(tempProducts);
    }
  }, [loading, tempProducts]);

  return (
    <>
      <Products products={loading ? products : tempProducts} />
      <Pagination
        currentPage={currPage}
        totalPages={3}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Homepage;
