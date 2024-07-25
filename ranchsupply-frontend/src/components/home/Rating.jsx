import React from 'react';
import './scr/app.css'; 

const Rating = ({ value, text }) => {
  if (!value) return <div></div>;

  return (
    <div className="rating">
      <span>
        <i
          className={
            value >= 1
              ? 'fa fa-star'
              : value >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 2
              ? 'fa fa-star'
              : value >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 3
              ? 'fa fa-star'
              : value >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 4
              ? 'fa fa-star'
              : value >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 5
              ? 'fa fa-star'
              : value >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      {text && <span>{text}</span>}
    </div>
  );
};

export default Rating;
