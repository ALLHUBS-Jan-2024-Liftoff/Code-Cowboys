import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Category from "./category/category";
import Price from "./price/price";
import "./sidebar.css";

const Sidebar = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) =>
    selectedCategory === '' || item.category === selectedCategory
  );

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleCategoryChange} />
        <Price />
      </section>
      <section className="items">
        {filteredItems.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
};

Sidebar.defaultProps = {
  items: [],
};

export default Sidebar;