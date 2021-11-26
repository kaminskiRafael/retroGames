import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Game from './Pages/Game/Game';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/profile" element={< Profile/>} />
        <Route path="/game" element={<Game />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
