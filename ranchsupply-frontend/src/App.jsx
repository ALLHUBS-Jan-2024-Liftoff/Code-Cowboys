import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/home/NavigationBar";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/home/Footer";
import Products from "./components/products/Products";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Logout from "./Authentication/Logout";


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/logout" element={<Logout />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;