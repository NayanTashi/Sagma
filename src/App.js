import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
    
      <Navbar/>
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
   
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
