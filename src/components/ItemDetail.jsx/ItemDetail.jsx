import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemDetail.css"
import { useAppContext } from "../Context/CartContext";
import Count from "../ItemCount/Count";


const ItemDetail = () => {
const {id} = useParams();
    
    const {productos} = useAppContext();
    //console.log(productos)

    const[productoSeleccionado, setProductoSeleccionado]= useState({});

useEffect(() => {
    console.log(productos)
    const findProduct = productos.find(element => element.id ===  parseInt(id));
    setProductoSeleccionado(findProduct)
}, [productos])

    const [cantidad, setCantidad] = useState(1);

    let handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
}
    let handleSumar = () => {
    cantidad < Item.stock && setCantidad(cantidad + 1)
}

console.log(handleRestar);
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
            <Count  cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar}/>
            </div>
        </div>
            )
}
        
 
export default ItemDetail