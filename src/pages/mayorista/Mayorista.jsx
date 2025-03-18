import Navbar from "../components/navbar";
import { FiFileText, FiPhoneCall } from "react-icons/fi";
import "./mayorista.css";

function Mayorista() {
    function handleDownload() {
        const confirmDownload = window.confirm("¿Quieres descargar la lista de precios?");
        if (confirmDownload) {
            const link = document.createElement("a");
            link.href = "/lista-de-precios.pdf";
            link.download = "lista-de-precios.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <section className="mayorista_container">
            <div className="navbar-mayorista">
                <Navbar />
            </div>
            <div className="mayorista-content">
                <h1 className="mayorista-title">Mayorista</h1>
                <p className="mayorista-description">
                    Descubre nuestros precios exclusivos para compras al por mayor. 
                    Contáctanos y obtén las mejores ofertas.
                </p>
                <div className="mayorista-options">
                    <button className="options" onClick={handleDownload}>
                        <FiFileText className="icon" />
                        Lista de Precios
                    </button>
                    <a href="https://wa.me/5591134732744" target="_blank" rel="noopener noreferrer" className="options">
                        <FiPhoneCall className="icon" />
                        Contactar Vendedor
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Mayorista;