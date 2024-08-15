import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchdata from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemDetail from './components/ItemDetail.jsx/ItemDetail';
import NotFound from './components/404/NotFund';


function App() {

const[productos, setProductos] = useState([])


useEffect(()=> {
  fetchdata()
  .then(response => {
    setProductos(response)
  })
  .catch(err => console.error(err));
  }, []);



  function AgregarAlCarrito(productos){
    const carritoAuxiliar =[...carrito];
    carritoAuxiliar.push(productos);
    setCarrito(carritoAuxiliar);
    console.log("AGREGADO CORRECTAMENTE", productos)
  }

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path="/productos" element={<ItemListContainer productos = {productos}/>}/>
      <Route path="/detalle/:id" element={<ItemDetail  productos = {productos}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
