import './App.css'
import FAQ from './Faq.jsx'
import Destaques from './pages/Destaques.jsx'
import Gallery from './pages/Gallery.jsx'
import Header from './pages/Header.jsx'
import Links from './pages/Links.jsx'
import Reputacion from './pages/components/Reputacion.jsx'
import Whatsapp from './pages/components/WhatsappIcon.jsx'

function App() {

  return (
    <>
      <Header/>
      <Gallery/>
      <Reputacion/>
      <Destaques/>
      <Links/>
      <a href="https://wa.me/551134732744" aria-label="Contactar por whatsapp" target="_blank">
        <Whatsapp/>
      </a>
    </>
  )
}

export default App
