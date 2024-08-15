import React from 'react';
import Category from "./category/category";
import Price from "./price/price";
import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;