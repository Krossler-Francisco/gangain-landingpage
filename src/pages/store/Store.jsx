import { useState } from "react";
import Navbar from "../components/navbar";
import ProductCard from "./components/ProductCard";
import "./Store.css";
import products from "./components/products.json";

function Store() {
  const [selectedSize, setSelectedSize] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    const newFilteredProducts = products.filter((product) => {
      return (
        (selectedSize ? product.size === selectedSize : true) &&
        (maxPrice ? product.price <= parseFloat(maxPrice) : true) &&
        (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
      );
    });
    const uniqueProducts = Array.from(new Set(newFilteredProducts.map(a => a.id)))
      .map(id => newFilteredProducts.find(a => a.id === id));
    setFilteredProducts(uniqueProducts);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <div className="carrito_card">
        <p>Carrito</p>
        <p>Total: ${getTotalPrice()}</p>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x{item.quantity} - ${item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <button disabled={cart.length === 0}>Comprar</button>
      </div>
      <div className="navbar_store">
        <Navbar />
      </div>
      <section className="store_container">
        <div className="store_submenu">
          <label>
            Filtrar por tamaño:
            <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
              <option value="">Todos</option>
              {["20cm", "25cm", "30cm", "35cm", "40cm", "45cm", "50cm", "55cm", "60cm", "65cm", "70cm", "75cm"].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </label>

          <label>
            Precio máximo:
            <input
              type="number"
              placeholder="Ingrese un valor"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            />
          </label>

          <label>
            Buscar por nombre:
            <input
              type="text"
              placeholder="Ingrese nombre"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </label>

          <button onClick={handleSearch} className="search-button">Buscar</button>
        </div>

        <section className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product)}
              />
            ))
          ) : (
            <p className="no-results">No se encontraron productos.</p>
          )}
        </section>
      </section>
    </>
  );
}

export default Store;
