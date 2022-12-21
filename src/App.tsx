import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { CartPage } from './pages/CartPage/CartPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <main> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
  );
}

export default App;
