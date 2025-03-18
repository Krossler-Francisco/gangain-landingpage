import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      document.querySelector(".header-landing").style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-landing">
      <Navbar />
      <section className="section-landing">
        <h1>gangain</h1>
        <p>
          Más de 20 años importando artículos de distintas regiones y culturas del mundo, llevando belleza y armonía a nuestros clientes.
        </p>
        <button className='btn' ><Link to='/store'>VISITAR TIENDA</Link></button>
      </section>
    </header>
  );
}

export default Header;
