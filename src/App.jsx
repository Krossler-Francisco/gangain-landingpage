import './App.css'
import Facebook from './components/Face'
import Flecha from './components/Flecha'
import Instagram from './components/Instagram'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <header className='header-landing'>
        <Navbar/>
        <section className='section-landing'>
          <h1>
            GANGAIN
          </h1>
          <p>
          Más de 20 años importando artículos de distintas regiones y culturas del mundo, llevando belleza y armonía a nuestros clientes.
          </p>
          <button className='btn' ><a href="">Tienda</a></button>
        </section>

        <section className='section2-landing'>
          <div className='icons'>
            <Facebook/>
            <Instagram/>
          </div>
          <div>
            <figure>
              <div>
              <h1>Nuestra Misión</h1>
              <p>Nos especializamos en la reventa de productos de decoración, con un enfoque particular en soluciones de iluminación que destacan por su diseño y calidad.</p>
              </div>
              <button className='btn fig'><a href="#">Produtos <span><Flecha/></span></a></button>
            </figure>
          </div>
        </section>
      </header>
    </>
  )
}

export default App
