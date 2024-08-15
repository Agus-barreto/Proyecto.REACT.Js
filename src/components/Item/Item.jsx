import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({imagen, nombre, descripcion, precio, id}) => {
    
    return(
        <div key={id} className="cart-productos" >
        <img src={imagen}  className="imagen"/>
        <h2 className="titulo">{nombre}</h2>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <button className="btn">Agregar al Carrito</button>
        <Link to={`/detalle/${id}`}>
        <button className="btn">Ver detalles</button>
        </Link>
        </div>
        )
        
}

export default Item;