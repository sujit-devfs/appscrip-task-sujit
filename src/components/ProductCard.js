import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <span className="price">${product.price}</span>
      <button className="wishlist-btn">
        <i className="fa fa-heart"></i>
      </button>
    </div>
  );
};

export default ProductCard;
