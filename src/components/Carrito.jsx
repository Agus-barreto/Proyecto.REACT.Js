import React from "react";
import { useAppContext } from "./Context/CartContext";


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito} = useAppContext();
    
    const handleVaciar = () => {
        vaciarCarrito();
    }
    return(
    <div className="Carrito">
        <h1>CARRITO</h1>

        {
            carrito.map((productos) => {
                return(
                <div key={productos.id} className="cart-productos" >
                <img src={productos.imagen}  className="imagen"/>
                <h2 className="titulo">{productos.nombre}</h2>
                <p>Precio Unitario:${productos.precio}</p>
                <p>Precio Total:${productos.precio * productos.cantidad}</p>
                <p>Cant:{productos.cantidad}</p>
                </div>
                )
            })
        }

        <h2>Precio Total: ${precioTotal()}</h2>
        <button onClick={handleVaciar}>Vaciar</button>
    </div>
    )
}

export default Carrito;