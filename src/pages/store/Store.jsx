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

  const handleSearch = () => {
    // Filtrar los productos solo cuando se hace clic en el botón "Buscar"
    const newFilteredProducts = products.filter((product) => {
      return (
        (selectedSize ? product.size === selectedSize : true) && // Filtra por tamaño
        (maxPrice ? product.price <= parseFloat(maxPrice) : true) && // Filtra por precio máximo
        (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) // Filtra por nombre
      );
    });

    // Para eliminar duplicados, podemos usar un Set con el id de los productos
    const uniqueProducts = Array.from(new Set(newFilteredProducts.map(a => a.id)))
      .map(id => newFilteredProducts.find(a => a.id === id));

    setFilteredProducts(uniqueProducts); // Actualiza los productos filtrados sin duplicados
  };

  // HACER CARRITO QUE FUNCIONE Y PROXIMA PAGINA PIDIENDO DATOS DEL CLIENTE 1
  // HACER TODO EL BACKEND DE PRODUCTOS, PEDIDOS, ETC. 2

  return (
    <>
      <div className="carrito_card">
        <p>Carrito</p>
        <p>Total: $0.00</p>
        <button>Comprar</button>
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
              <option value="20cm">20cm</option>
              <option value="25cm">25cm</option>
              <option value="30cm">30cm</option>
              <option value="35cm">35cm</option>
              <option value="40cm">40cm</option>
              <option value="45cm">45cm</option>
              <option value="50cm">50cm</option>
              <option value="55cm">55cm</option>
              <option value="60cm">60cm</option>
              <option value="65cm">65cm</option>
              <option value="70cm">70cm</option>
              <option value="75cm">75cm</option>
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
                onAddToCart={(p) => console.log("Añadido al carrito:", p)}
                onMoreInfo={(p) => console.log("Más información sobre:", p)}
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
