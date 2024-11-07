import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Login from './components/Login';
import User from './components/User';
import DonorUpdate from './components/DonorUpdate';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-donor" element={<DonorUpdate/>} />
      </Routes>
    </>
  );
}

export default App;

