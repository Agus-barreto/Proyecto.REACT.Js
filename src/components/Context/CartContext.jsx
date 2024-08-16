import { createContext, useContext, useState} from "react";
import fetchdata from "../../fetchData";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

/*const firbraseConfing ={

}
const app = initializeApp(firebaseConfing);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
*/

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const ContextProvider= (props) => {

    const[productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    

    function cargarData(){
    
        /*getDocs(productosCollection).then(snapshot)*/


    
            fetchdata()
            .then(response => {
                setProductos(response)
            })
            .catch(err => console.error(err));
    };

    function agregarAlCarrito(id){
        const carritoAuxiliar =[...carrito];
        const productoAAgregar = productos.find(element => element.id === id)
        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
    }

    return(
        <AppContext.Provider value={{productos, carrito, cargarData, agregarAlCarrito}}>
            {props.children}
        </AppContext.Provider>
    )
}
