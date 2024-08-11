import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/home/Footer";
import Products from "./components/products/Products";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
