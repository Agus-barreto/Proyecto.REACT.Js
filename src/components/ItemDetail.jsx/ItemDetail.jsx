import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemDetail.css"
import { useAppContext } from "../Context/CartContext";

const ItemDetail = () => {
const {id} = useParams();
    
const {productos} = useAppContext();

const[productoSeleccionado, setProductoSeleccionado]= useState({})
useEffect(() => {
    const findProduct = productos.find(element => element.id ===  parseInt(id));
    setProductoSeleccionado(findProduct)
}, [])


    return(

        <div className="productos">
            <div className="detalles">
            <Item 
            key={productoSeleccionado.id}
            imagen={productoSeleccionado.imagen}
            nombre={productoSeleccionado.nombre}
            descripcion={productoSeleccionado.descripcion}
            precio={productoSeleccionado.precio}
            />
            </div>
        </div>
        
    )
}

export default ItemDetail