import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useAppContext,  } from "../Context/CartContext";
import "./ItemListContainer.css"


/*import { useParams } from "react-router-dom";*/

const ItemListContainer = () =>{

    const { cargarData, productos } = useAppContext();

    useEffect(() => {
        cargarData();
    });
    
    /*const dataContext = useAppContext();
    console.log(dataContext)*/


    return (
        <>
        
        { productos.length === 0 ? 
                    <Loader />
                    :
                    <div>
    <div>
<form className="button">
    <button className="filtro-btn"  >Productos en Stock</button>
    <button className="filtro-btn" >Productos sin Stock</button>
</form>
</div>

<div className="Item-list">
            <ItemList productos={productos} /> 
            </div>
            </div>
        }
        </>
    )
}

export default ItemListContainer;