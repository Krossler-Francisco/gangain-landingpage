import React, { useState } from "react";
import Ig from "./Instagram";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
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
                    <li><a className="links" href="./">Tienda Oficial</a></li>
                    <li><a className="links" href="./">Contacto</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
