import { useState } from "react";
import { FaShoppingCart, FaInfoCircle, FaTruck } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, onMoreInfo, onClickInCart }) => {

  const clickOnCartConst = () => {
    onAddToCart(product);
    onClickInCart(true);
  };

  return (
    <div className="product-card">
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
        {product.freeShipping && (
          <p className="free-shipping">
            <FaTruck /> Envío gratis
          </p>
        )}
        <div className="button-container">
          <button className=" btn_product add-to-cart"
          onClick={clickOnCartConst}>
            <FaShoppingCart /> Carrito
          </button>
          <button className="btn_product more-info" onClick={() => onMoreInfo(product)}>
            <FaInfoCircle /> Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;