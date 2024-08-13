import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/home/NavigationBar";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/home/Footer";
import Products from "./components/products/Products";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Logout from "./components/Authentication/Logout";


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <nav>
          {!authenticated ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link to="/products">Products</Link>
              <Link to="/logout">Logout</Link>
            </>
          )}
        </nav>
        <Routes>
          {/* Public Routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route exact path="/register" element={<Register />} />

          {/* Private Routes */}
          {authenticated ? (
            <>
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/logout" element={<Logout setAuthenticated={setAuthenticated} />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;