import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/home/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/home/Footer";
import Products from "./components/products/Products";
import Admin from "./components/admin/Admin";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/admin" element={<Admin />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
