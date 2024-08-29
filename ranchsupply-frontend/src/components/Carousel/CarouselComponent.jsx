import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css'; 

import LaborDay from "../../assets/LaborDay.png";
import Deals from "../../assets/Deals.png";
import Sale from "../../assets/Sale.png";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container"> 
      <h2 style={{ textAlign: 'center' }}>Featured Promotions</h2>
      <Slider {...settings}>
        <div>
          <img src={LaborDay} alt="Labor Day Sale" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={Deals} alt="Deals" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={Sale} alt="Sale" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;