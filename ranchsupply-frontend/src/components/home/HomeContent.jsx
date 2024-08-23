import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeContent.css';

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-shot-triticale-field-sunset_181624-43638.jpg?t=st=1724296879~exp=1724300479~hmac=d1fb4f37fadd7c44b2b41b4541c33fdf7691c98fffbdc4d050f5378076779d2a&w=1060)',
        }}
      >
        <div className="hero-content">
          <h1>Welcome to Ranch Supply</h1>
          <p>Your Trusted Source for Ranch Essentials</p>
          <div className="hero-buttons">
            <button className="hero-button" onClick={() => navigate('/products')}>
              Shop Now
            </button>
            <button className="hero-button" onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card" onClick={() => navigate('/product/1')}>
            <img
              src="https://media.istockphoto.com/id/175482356/photo/english-saddle.jpg?s=612x612&w=0&k=20&c=pdUIDBTe_8nzwPpJ7iFWQLoWUE0QGQkKunAF-97Lo1Y="
              alt="Product 1"
            />
            <h3>High-Quality Saddle</h3>
            <p>High-quality saddle for long-lasting performance.</p>
            <button className="product-button">Add to Cart</button>
          </div>
          <div className="product-card" onClick={() => navigate('/product/2')}>
            <img
              src="https://img.freepik.com/free-photo/top-view-construction-hammers-still-life_23-2150563138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user"
              alt="Product 2"
            />
            <h3>Durable Fencing Tools</h3>
            <p>Durable fencing tools for every rancher.</p>
            <button className="product-button">Add to Cart</button>
          </div>
          <div className="product-card" onClick={() => navigate('/product/3')}>
            <img
              src="https://media.istockphoto.com/id/976680140/photo/farmers-boots.jpg?s=612x612&w=0&k=20&c=MBvWIPBaoSw-9eO3cO1SqsLFWFgizE_ioffXV5_Vgz4="
              alt="Product 3"
            />
            <h3>Comfortable Ranch Wear</h3>
            <p>Comfortable and stylish ranch wear.</p>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
