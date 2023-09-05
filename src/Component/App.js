import '../css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import APIFetch from './APIFetch';
import SingleP from './SingleP';
import Home from './Home';
import Cart from './Cart';
import { useState } from 'react';


function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/products' element={< APIFetch />}/>
        <Route path='/Singleproduct/:pid'  element={<SingleP/>}/>
        <Route path='/cart'  element={<Cart/>}/>
      </Routes>
      
      
      
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
