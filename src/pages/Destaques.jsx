import "./Destaques.css"

const Destaques = () =>{
    return(
        <section className="destaques-container">
            <h1>Logística</h1>
            <a href="https://www.facebook.com/hans.express.mensajeria" target="_blank">
                <img src="./banner.png" loading="lazy" alt="banner logistica" />
            </a>
            <a href="https://www.mercadolibre.com.ar/pagina/gangain" target='_blank'>
                <img src="./banner2.png" loading="lazy" alt="banner mercado libre" />
            </a>
            <a href="https://www.correoargentino.com.ar/formularios/e-commerce" target="_blank">
                <img src="./banner3.png" loading="lazy" alt="banner correo argentino" />
            </a>
        </section>
    )
};

export default Destaques;