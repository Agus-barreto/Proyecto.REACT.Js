import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchdata from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemDetail from './components/ItemDetail.jsx/ItemDetail';
import NotFound from './components/404/NotFund';
import { ContextProvider } from './components/Context/CartContext';
import Carrito from './components/Carrito';


function App() {



useEffect(()=> {
  
  }, []);



  

  return (
    <>
    <ContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path="/productos" element={<ItemListContainer />}/>
      <Route path="/detalle/:id" element={<ItemDetail/>} />
      <Route path="/carrito" element={<Carrito />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </ContextProvider>
    </>
  )
}

export default App
