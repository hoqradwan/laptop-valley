import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const {image, name, price } = product;
  return (
    <div className="product-container">
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p className="price">$ {price}</p>
      <button className="btn-cart" onClick={() => handleAddToCart(name)}>
        <p className="btn-text">Add to cart</p>
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
