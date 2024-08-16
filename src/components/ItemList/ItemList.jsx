import React from "react";
import Item from "../Item/Item";


const ItemList = ({productos}) => {
    return(
        
        productos.map((element, id)=> {
            return(
                <Item index={id} id={element.id} imagen={element.imagen} nombre={element.nombre} descripcion={element.descripcion} precio={element.precio} />
            
        )
        })
    )
}

export default ItemList;