import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Destaques from './pages/Destaques.jsx';
import Gallery from './pages/Gallery.jsx';
import Header from './pages/Header.jsx';
import Links from './pages/Links.jsx';
import Reputacion from './pages/components/Reputacion.jsx';
import Whatsapp from './pages/components/WhatsappIcon.jsx';
import ContactList from './pages/components/ContactList.jsx';
import Store from './pages/store/Store.jsx';
import ContactMessages from './pages/components/ContactMessages.jsx';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<><Header /><Gallery /><Reputacion /><Destaques /><Links /></>} />
        <Route path="/store" element={<Store />} />
        <Route path="/test" element={<Links />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/messages" element={<ContactMessages />} />
      </Routes>
      <a href="https://wa.me/5591134732744" aria-label="Contactar por whatsapp" target="_blank" rel="noopener noreferrer">
        <Whatsapp />
      </a>
    </Router>
  );
}

export default App;
