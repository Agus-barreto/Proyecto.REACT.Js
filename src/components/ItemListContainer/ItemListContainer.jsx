import React, { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = ({productos}) =>{

    
    return (
        <>
        
        { productos.length === 0 ? 
                    <Loader />
                    :
            <div className="Item-list">
            <ItemList productos={productos} /> 
            </div>
        }
        </>
    )
}

export default ItemListContainer;