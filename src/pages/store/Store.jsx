import { useState } from "react";
import Navbar from "../components/navbar";
import ProductCard from "./components/ProductCard";
import products from "./components/products.json";
import "./Store.css";
import { useNavigate } from 'react-router-dom';

function Store() {
  // Estados temporales para los filtros
  const [tempSelectedSize, setTempSelectedSize] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("");
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [tempSelectedColor, setTempSelectedColor] = useState("");
  const [tempFreeShipping, setTempFreeShipping] = useState(false);
  const [tempDiscount, setTempDiscount] = useState(false);

  // Estados efectivos (se actualizan solo al hacer clic en "Filtrar")
  const [selectedSize, setSelectedSize] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);
  const [discount, setDiscount] = useState(false);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Función para aplicar los filtros
  const handleSearch = () => {
    setSelectedSize(tempSelectedSize);
    setMaxPrice(tempMaxPrice);
    setSearchTerm(tempSearchTerm);
    setSelectedColor(tempSelectedColor);
    setFreeShipping(tempFreeShipping);
    setDiscount(tempDiscount);
  };

  // Función para obtener los productos filtrados
  const filteredProducts = products.filter((product) =>
    (selectedSize ? product.size === selectedSize : true) &&
    (maxPrice ? product.price <= parseFloat(maxPrice) : true) &&
    (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
    (selectedColor ? product.color === selectedColor : true) &&
    (freeShipping ? product.freeShipping === true : true) &&
    (discount ? product.discount > 0 : true)
  );


  const navigate = useNavigate();


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const goToCheckout = () => {
    navigate("/checkout", {
      state: { cart: cart }
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    
    // Obtener productos relacionados por categoría, color o características similares
    const related = products.filter(p => 
      p.category === product.category || p.color === product.color || p.price <= product.price + 20
    );
    
    setRelatedProducts(related);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setRelatedProducts([]);
  };

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
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity}
                    <button className="frank-remove-btn" onClick={() => removeFromCart(item.id)}>🗑</button>
                  </li>
                ))}
              </ul>
              <p>Total: ${totalPrice}</p>
              <button className="checkout-btn" onClick={goToCheckout}>
                Comprar
              </button>
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
              <select value={tempSelectedColor} onChange={(e) => setTempSelectedColor(e.target.value)}>
                <option value="">Todos los colores</option>
                <option value="rojo">Rojo</option>
                <option value="azul">Azul</option>
                <option value="verde">Verde</option>
                <option value="negro">Negro</option>
                <option value="blanco">Blanco</option>
              </select>
              <label>
                <input
                  type="checkbox"
                  checked={tempFreeShipping}
                  onChange={(e) => setTempFreeShipping(e.target.checked)}
                />
                Envío gratis
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={tempDiscount}
                  onChange={(e) => setTempDiscount(e.target.checked)}
                />
                En descuento
              </label>
              <button className="filter-btn" onClick={handleSearch}>Filtrar</button>
            </div>
          </div>

          <div className="products">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
                onMoreInfo={() => openProductDetails(product)}
                onClickInCart={setIsCartOpen}
              />
            ))}
          </div>
        </div>

        <button className="cart-toggle" onClick={() => setIsCartOpen(!isCartOpen)}>
          🛒 {totalItems > 0 && <span className="cart-count"><span>{totalItems}</span></span>}
        </button>
      </div>

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>✖</button>
            <h2>{selectedProduct.name}</h2>
            <p><strong>Descripción:</strong> {selectedProduct.description}</p>
            <p><strong>Precio:</strong> ${selectedProduct.price}</p>
            <p><strong>Tamaño:</strong> {selectedProduct.size}</p>
            <p><strong>Color:</strong> {selectedProduct.color}</p>
            <p><strong>Material:</strong> {selectedProduct.material}</p>
            <h3>Productos relacionados:</h3>
            <div className="related-products">
              {relatedProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="related-product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Store;
