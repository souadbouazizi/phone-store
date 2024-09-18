// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Importez le fournisseur de contexte
import NavbarComponent from './components/NavbarComponent';
import ProductDisplay from './components/ProductDisplay';
import Cart from './components/Cart';
import Home from './pages/Home';
import About from './pages/About';
import Sales from './pages/Sales';
import Blog from './pages/Blog';
import SearchResultsPage from './pages/SearchResultsPage';
import Contact from './pages/Contact';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      <Carousel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDisplay />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:category" element={<ProductDisplay />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;