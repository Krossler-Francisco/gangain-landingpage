import Navbar from './components/navbar'

function Header() {

  return (
    <>
    <header className='header-landing'>
    <Navbar/>
    <section className='section-landing'>
      <h1>
      gangain
      </h1>
      <p>
      Más de 20 años importando artículos de distintas regiones y culturas del mundo, llevando belleza y armonía a nuestros clientes.
      </p>
      <button className='btn' ><a href="">VISITAR TIENDA</a></button>
    </section>
  </header>
</>
  )
}

export default Header
