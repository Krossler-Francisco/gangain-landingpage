import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiHome, FiShoppingCart, FiMessageSquare, FiShoppingBag, FiMail, FiPackage } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [delayedShow, setDelayedShow] = useState(false);
    const [activeNav, setActiveNav] = useState("home");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleNavClick = (nav) => {
        setActiveNav(nav);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleModel = () => {
        if (!showModel) {
            setShowModel(true);
            setTimeout(() => setDelayedShow(true), 100);
        } else {
            setDelayedShow(false);
            setTimeout(() => setShowModel(false), 300);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Mensaje enviado correctamente.");
                setFormData({ name: "", email: "", message: "" });
                toggleModel();
            } else {
                alert("Error al enviar el mensaje.");
            }
        } catch (error) {
            alert("Error al enviar el mensaje.");
        }
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
                    <li><Link onClick={toggleMenu} className="links" to="/"><FiHome /> Home</Link></li>
                    <li><Link onClick={toggleMenu} className="links" to="/store"><FiShoppingCart /> Nuestra Tienda</Link></li>
                    <li><Link onClick={toggleMenu} className="links" to="/mayorista"><FiPackage /> Mayorista</Link></li>
                    <li><Link onClick={toggleMenu} className="links" to="/messages"><FiPackage /> Messages</Link></li>
                    <li><a onClick={toggleMenu} className="links" href="https://www.mercadolibre.com.ar/pagina/gangain" target="_blank" rel="noopener noreferrer"><FiShoppingBag /> Mercado Libre</a></li>
                    <li><button onClick={toggleModel} className="links no-btn"><FiMail /> Contacto</button></li>
                </ul>
            </nav>
            {showModel && (
                <div className={`model ${delayedShow ? "show" : ""}`}>
                    <div className="model-content">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

                            <button type="submit">Enviar</button>
                        </form>
                        <button className="no-btn x" onClick={toggleModel}>x</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Navbar;