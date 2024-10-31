import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModel, setShowModel] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleModel = () => {
        setShowModel(!showModel);
    };

    return (
        <section className="navbar">
            <div className={`menu-btn ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={menuOpen ? "show" : ""}>
                <Logo />
                <ul>
                    <li><a className="links" href="./">Home</a></li>
                    <li><a className="links" href="./">Productos</a></li>
                    <li><a className="links" href="https://www.mercadolibre.com.ar/pagina/gangain">Tienda Oficial</a></li>
                    <li><button onClick={toggleModel} className="links no-btn" href="./">Contacto</button></li>
                </ul>
            </nav>
            {showModel && (
                <div className="model">
                    asdasjdk
                    <button className="no-btn" onClick={toggleModel}></button>
                </div>)}
        </section>
    );
};

export default Navbar;
