import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/CartContext";

const Item = ({imagen, nombre, descripcion, precio, id}) => {
    
    const {agregarAlCarrito} = useAppContext();
    return(
        <div key={id} className="cart-productos" >
        <img src={imagen}  className="imagen"/>
        <h2 className="titulo">{nombre}</h2>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <button onClick={() => agregarAlCarrito(id)} className="btn"  >Agregar al Carrito</button>
        <Link to={`/detalle/${id}`}>
        {window.location.pathname.split('/')[0] != "detalle" && <button className="btn">Ver detalles</button>}
        </Link>
        </div>
        )
        
}

export default Item;