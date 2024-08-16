import React, { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useAppContext,  } from "../Context/CartContext";

const ItemListContainer = () =>{

    const {cargarData, productos, agregarAlCarrito} = useAppContext();
    

    useEffect(()=> {
        cargarData();
    });



    return (
        <>
        
        { productos.length === 0 ? 
                    <Loader />
                    :
                    <div>
    <div>
    <form>
  <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">HTML</label><br/>
  <input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css">CSS</label><br/>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript">JavaScript</label>
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