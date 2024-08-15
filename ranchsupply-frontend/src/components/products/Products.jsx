import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";
import { listProducts } from "../../services/ProductService";
import Sidebar from "../sidebar/sidebar";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);
  // loading next page
  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  function getAllProducts() {
    listProducts()
      .then((response) => {
        console.log("products Data: " + response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
       <Sidebar />
      <div>
        {true && (
          <InfiniteScroll
            dataLength={products.length}
            next={loadNextPage}
            hasMore={true}
            // loader={
            //   <div className="text-center mb-3">
            //     <Spinner animation="border" as="span" size="lg"></Spinner>
            //   </div>
            // }
          >
            <Container className="mt-4">
              <Row>
                {products.map((product, index) => {
                  return (
                    <ProductCard product={product} key={index}></ProductCard>
                  );
                })}
              </Row>
            </Container>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Products;
