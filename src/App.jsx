import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Destaques from './pages/Destaques.jsx';
import Gallery from './pages/Gallery.jsx';
import Header from './pages/Header.jsx';
import Links from './pages/Links.jsx';
import Reputacion from './pages/components/Reputacion.jsx';
import Whatsapp from './pages/components/WhatsappIcon.jsx';
import ContactList from './pages/components/ContactList.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Gallery /><Reputacion /><Destaques /><Links /></>} />
        <Route path="/contact" element={<ContactList />} />
      </Routes>
      <a href="https://wa.me/5591134732744" aria-label="Contactar por whatsapp" target="_blank" rel="noopener noreferrer">
        <Whatsapp />
      </a>
    </Router>
  );
}

export default App;
