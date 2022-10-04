import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import NosotrosPage from './pages/NosotrosPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="contacto" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>
      <Footer><div>Soy un pie</div></Footer>
    </div>
  );
}

export default App;
