import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import SingleCocktail from './pages/SingleCocktail';
import LoginPopup from './components/LoginPopup';

import Dashboard from './pages/Admin/Dashboard';
import Verify from './pages/Verify';
import MyOrders from './pages/MyOrders';

const App = () => {
  const url = 'http://localhost:4001';
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          {/* Admin */}
          <Route path="/admin" element={<Dashboard url={url} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
