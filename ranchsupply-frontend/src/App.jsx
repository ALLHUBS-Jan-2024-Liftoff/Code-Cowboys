import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes,  Navigate, Link, } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/home/Footer";
import Products from "./components/products/Products";
import CartProvider from "./context/CartProvider";
import { ToastContainer } from "react-toastify";
import ProductDetailPage from "./components/products/ProductDetailPage";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart/Cart";
import OrderCheckout from "./components/order/OrderCheckout";
import OrderDetails from "./components/order/OrderDetails";
import Orders from "./components/order/Orders";
import UserProvider from "./context/UserProvider";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Admin from "./components/admin/Admin";
import NavigationBar from "./components/navigation/NavigationBar";
import Login from "./userAuthentication/Login";
import Register from "./userAuthentication/Register";
import Logout from "./userAuthentication/Logout";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import PaymentFailed from "./components/payment/PaymentFailed";
import Login from "./userAuthentication/Login";
import Register from "./userAuthentication/Register";
import Logout from "./userAuthentication/Logout";



function App() {
  // const [count, setCount] = useState(0);

  const [authenticated, setAuthenticated] = useState(0);

  return (
    <>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <NavigationBar />
            <ToastContainer
              position="top-right"
              hideProgressBar={true}
              draggable
              autoClose={2000}
              closeOnClick
              pauseOnHover
              theme="dark"
            />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/contact" element={<ContactUs />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/logout" element={<Logout setAuthenticated={setAuthenticated}/>} />
              <Route
                path="/product/:productId"
                element={<ProductDetailPage />}
              ></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route path="/checkout-order" element={<OrderCheckout />}></Route>
              <Route path="/orders" element={<Orders />}></Route>
              <Route path="/order/:orderId" element={<OrderDetails />}></Route>
              <Route exact path="/admin" element={<Admin />} />
              <Route
                path="/payment/success/:orderId"
                element={<PaymentSuccess />}
              ></Route>
              <Route
                path="/payment/fail/:orderId"
                element={<PaymentFailed />}
              ></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
