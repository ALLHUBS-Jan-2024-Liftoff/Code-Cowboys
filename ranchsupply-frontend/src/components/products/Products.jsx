import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";
import Sidebar from "../sidebar/sidebar";
import { getAllProducts } from "../../services/ProductService";
import { toast } from "react-toastify";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadAllProducts();
  }, []);
  // loading next page
  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const loadAllProducts = async () => {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Error loading products:", error);
      toast.error("Something went wrong! unable to fetch products");
    }
  };

  
  return (
    <>
       <Sidebar />
      <div>
        {true && (
          <InfiniteScroll
            dataLength={products.length}
            next={loadNextPage}
            hasMore={true}
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
