import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { toast } from "react-toastify";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { getProductById } from "../../services/ProductService";
import { CartContext } from "../../context/CartProvider";
import AddReviewComponent from "../Review/AddReviewComponent";
import { Rating } from "react-ratings-declarative";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const fetchProductById = async (productId) => {
    try {
      const producData = await getProductById(productId);
      setProduct(producData.data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong! Please try again later");
    }
  };

  // handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleAddToCart = (productId, quantity) => {
    if (true) {
      const data = {
        productId,
        quantity,
      };

      // function call to add item to cart
      addItem(data, () => {
        toast.success("Item added to cart", {
          position: "bottom-right",
        });
      });
    } else {
      toast.error("Please login to add item to cart", {
        position: "bottom-right",
      });
    }
  };
  const handleBuyNow = (productId, quantity) => {
    // if (!isLogin) {
    //   // if user is not logged in then show toast
    //   toast.error("Please login to buy item", {
    //     position: "bottom-right",
    //   });
    // } else {
    // if user is logged in then add item to cart
    const data = {
      productId,
      quantity,
    };

    // function call to add item to cart
    addItem(data);
    window.location.href = "/checkout-order";
    // }
  };
  useEffect(() => {
    if (productId) {
      fetchProductById(productId);
    }
  }, [productId]);
  return (
    <>
      {product && (
        <Container className="mt-3">
          <Row>
            <Col md={5} lg={3}>
              <Image
                rounded
                src={product.productImage}
                alt=""
                className="card-img-top img-fluid"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  border: "1px solid #ced4da",
                }}
              />
            </Col>
            <Col md={7} lg={9}>
              <h5 className="text-muted fw-semibold mb-0">{product.brand}</h5>
              {product.quantity <= 0 ? (
                <Badge bg="danger">Out of Stock</Badge>
              ) : (
                ""
              )}
              <h3 className="fw-semibold mb-0">{product.title}</h3>
              <p>{product.description}</p>

              {/* Quantity */}
              {/* Show quantity options when quantity>0 or stock==true */}
              {product.quantity && (
                <div className="mb-5 d-flex gap-2 align-items-center">
                  <p className="m-0">Quantity</p>
                  <Form.Select
                    size="sm"
                    style={{ width: "75px" }}
                    value={quantity}
                    onChange={handleQuantityChange}
                  >
                    {/* If quantity is > 10 then show options till 10 otherwise show options for number of quantities we have */}
                    {product.quantity >= 10
                      ? Array.from({ length: 10 }, (_, index) => (
                          <option value={index + 1} key={index}>
                            {index + 1}
                          </option>
                        ))
                      : Array.from({ length: product.quantity }, (_, index) => (
                          <option value={index + 1} key={index}>
                            {index + 1}
                          </option>
                        ))}
                  </Form.Select>
                </div>
              )}

              <small className="text-danger fw-semibold">
                {product.quantity < 10 && product.quantity > 0
                  ? `Only ${product.quantity} left in stock`
                  : ""}
              </small>
              {product.discountedPrice ? (
                <div className="text-muted">
                  <h4 className="d-inline mb-0 text-decoration-line-through">
                    $ {product.price}
                  </h4>
                  <h4 className="text-danger ms-2 d-inline mb-0">
                    $ {product.discountedPrice}
                  </h4>
                </div>
              ) : (
                <div className="me-3">
                  <h4>$ {product.price}</h4>
                </div>
              )}

              <div className="mt-3">
                <Button
                  variant="primary"
                  className="me-2"
                  disabled={product.quantity <= 0}
                  onClick={() => {
                    handleBuyNow(product.productId, quantity);
                  }}
                >
                  Buy now
                </Button>
                <Button
                  variant="primary"
                  className="me-2"
                  disabled={product.quantity <= 0}
                  onClick={() => {
                    handleAddToCart(product.productId, quantity);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
          </Row>
          </Container>
      )}
  <Container className="mt-3">
  <h3>Product Reviews</h3>
  <div className="d-flex align-items-center">
    <Ratings
      rating={product.rating || 0}
      widgetDimensions="20px"
      widgetSpacings="2px"
      widgetRatedColors="blue"
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
    <span className="ms-2">{product.rating ? product.rating.toFixed(1) : 'No ratings yet'}</span>
  </div>
</Container>


      <AddReviewComponent
        productId={productId}
        show={showReviewModal}
        handleClose={() => setShowReviewModal(false)}
      />
    </>
  );
};

export default ProductDetailPage;
