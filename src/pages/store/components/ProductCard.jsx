import React from "react";
import "../styles/store.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Tamaño: {product.size}</p>
      <button onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
    </div>
  );
};

export default ProductCard;
