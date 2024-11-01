import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModel, setShowModel] = useState(false);
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
        setShowModel(!showModel);
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
            const response = await fetch('/api/contact', {
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
                    <li><a onClick={() => handleNavClick("home")} className={`links ${activeNav === "home" ? "active-nav" : ""}`} href="./">Home</a></li>
                    <li><a onClick={() => handleNavClick("products")} className="links" href="./">Productos</a></li>
                    <li><a className="links" href="https://www.mercadolibre.com.ar/pagina/gangain">Tienda Oficial</a></li>
                    <li><button onClick={toggleModel} className="links no-btn">Contacto</button></li>
                </ul>
            </nav>
            {showModel && (
                <div className="model">
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
