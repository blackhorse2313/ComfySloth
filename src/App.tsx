import './App.css';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { CartPage } from './pages/CartPage/CartPage';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { baseUrl } from './constant';
import { logIn } from './store/currentUser.slice';
import { getValueFromLocalStorage } from './services/localStorage.service';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = getValueFromLocalStorage('authToken');
    if (authToken) {
      fetch(`${baseUrl}/users/current`)
        .then((response) => response.json())
        .then((data) => dispatch(logIn({ user: data })));
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
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
