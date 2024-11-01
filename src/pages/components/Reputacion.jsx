import "./Reputacion.css"

const Reputacion = () => {
    return(
        <section className="reputacion">
            <h1>Confianza y Calidad</h1>
            <div className="reputacion-icons">
                <figure>
                    <div className="img-container">
                        <img width={120} src="./full.png" alt="mercado lider platinum" />
                    </div>
                    <h2>Mercado Envios FULL</h2>
                </figure>
                <figure>
                    <div className="img-container">
                        <img width={120} src="./platinum.png" alt="mercado lider platinum" />
                    </div>
                    <h2>Lider Platinum</h2>
                </figure>
                <figure>
                    <div className="img-container">
                        <img width={105} src="./flex.png" alt="mercado lider platinum" />
                    </div>
                    <h2>Mercado Envios Flex</h2>
                </figure>
            </div>
            <p>Como Mercado Líder Platinum, garantizamos la máxima confianza en cada compra. Con nuestros envíos FULL y Flex, tus productos llegan a tiempo, asegurando una experiencia de compra rápida y eficiente.</p>
        </section>
    )
};

export default Reputacion;