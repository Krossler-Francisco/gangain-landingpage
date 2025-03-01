import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, onMoreInfo }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <div className="button-container">
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </button>
        <button className="more-info" onClick={() => onMoreInfo(product)}>
          Más info
        </button>
      </div>
    </div>
  );
};

export default ProductCard;