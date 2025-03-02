import { useState } from "react";
import Navbar from "../components/navbar";
import ProductCard from "./components/ProductCard";
import products from "./components/products.json";
import "./Store.css";

function Store() {
  // Estados temporales para los filtros
  const [tempSelectedSize, setTempSelectedSize] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("");
  const [tempSearchTerm, setTempSearchTerm] = useState("");

  // Estados efectivos (se actualizan solo al hacer clic en "Filtrar")
  const [selectedSize, setSelectedSize] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para aplicar los filtros
  const handleSearch = () => {
    setSelectedSize(tempSelectedSize);
    setMaxPrice(tempMaxPrice);
    setSearchTerm(tempSearchTerm);
  };

  // Función para obtener los productos filtrados
  const filteredProducts = products.filter((product) =>
    (selectedSize ? product.size === selectedSize : true) &&
    (maxPrice ? product.price <= parseFloat(maxPrice) : true) &&
    (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <>
      <div className="navbar-store">
        <Navbar />
      </div>

      <div className="store-container">
        <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>✖</button>
          <h2>Carrito</h2>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                    <button className="frank-remove-btn" onClick={() => removeFromCart(item.id)}>🗑</button>
                  </li>
                ))}
              </ul>
              <p>Total: ${totalPrice}</p>
              <button className="checkout-btn">Comprar</button>
            </>
          ) : (
            <p>El carrito está vacío</p>
          )}
        </div>

        <div className="store-content">
          <div className="filters">
            <div className="filters-content">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={tempSearchTerm}
                onChange={(e) => setTempSearchTerm(e.target.value)}
              />
              <select value={tempSelectedSize} onChange={(e) => setTempSelectedSize(e.target.value)}>
                <option value="">Todos los tamaños</option>
                {[20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75].map((size) => (
                  <option key={size} value={`${size}cm`}>{size}cm</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Precio máximo"
                value={tempMaxPrice}
                onChange={(e) => setTempMaxPrice(e.target.value)}
              />
              <button className="filter-btn" onClick={handleSearch}>Filtrar</button>
            </div>
          </div>

          <div className="products">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>

        <button className="cart-toggle" onClick={() => setIsCartOpen(!isCartOpen)}>🛒</button>
      </div>
    </>
  );
}

export default Store;
