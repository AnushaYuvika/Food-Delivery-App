import React, { useState } from 'react';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';


const App = () => {

  const[showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <BrowserRouter>
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </> 
  )
}

export default App