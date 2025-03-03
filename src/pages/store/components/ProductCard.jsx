import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, onMoreInfo }) => {
  return (
    <div  className="product-card">
      <img
        onClick={() => onMoreInfo(product)}
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">
        ${product.price}{" "}
        {product.discount && (
          <span className="product-sale">-{product.discount}%</span>
        )}
      </p>
      {product.freeShipping && <p className="free-shipping">Envío gratis</p>}
      <div className="button-container">
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </button>
        <button className="more-info" onClick={() => onMoreInfo(product)}>
          Más info
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
