import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Products from "./Products";
import { Flex, Heading, Spinner } from "@chakra-ui/react";

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
      `https://server-deploy-xrqa.onrender.com/products?_start=${offset}&_limit=${limit}`
    );
    const data = await response.json();
    // console.log(
    //   offset,
    //   limit,
    //   `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    // );
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
      {loading ? (
        <Flex
          minH="100vh"
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Heading>
            Loading data, this may take up to 50 seconds for the first time...
            <br />
            Due to the free hosting service, the server may go to sleep after 30
            minutes of inactivity.
          </Heading>
        </Flex>
      ) : (
        <>
          <Products products={loading ? products : tempProducts} />
          <Pagination
            currentPage={currPage}
            totalPages={3}
            onPageChange={onPageChange}
            mt="0"
          />
        </>
      )}
    </>
  );
};

export default Homepage;
