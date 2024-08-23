import { createContext, useContext, useState} from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"; 
import Swal from "sweetalert2";




const firebaseConfig = {
    apiKey: "AIzaSyDj9HKz9NHFTvbQgPLo1eFOmIcAGlXxdJM",
    authDomain: "muebles-industriales-29ef2.firebaseapp.com",
    projectId: "muebles-industriales-29ef2",
    storageBucket: "muebles-industriales-29ef2.appspot.com",
    messagingSenderId: "743323962521",
    appId: "1:743323962521:web:2f1771ecd9be84c2fafc08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
const ordersCollection =  collection(db, "ordenes")

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const ContextProvider= (props) => {

    const[productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    

    function cargarData() {

        getDocs(productsCollection).then(snapshot => {
            // let arrayProductos = snapshot.docs.map(el => el.data()).sort((a,b) => a.id - b.id); // Ordenados por id
            let arrayProductos = snapshot.docs.map(element => element.data());
            setProductos(arrayProductos)
    }).catch(err => console.error(err));



            /*fetchdata()
            .then(response => {
                setProductos(response)
            })
            .catch(err => console.error(err));*/
    };

    function agregarAlCarrito(id){
        const carritoAuxiliar =[...carrito];
        
        // Tenemos que validar si el producto ya existe.
        let productoAAgregar = carritoAuxiliar.find((element)=> element.id === id);
        if (productoAAgregar){
            productoAAgregar.cantidad += 1;
        } else{
            productoAAgregar = {... productos.find(element => element.id === id)};
            productoAAgregar.cantidad = 1;
            carritoAuxiliar.push(productoAAgregar);
        }
        setCarrito(carritoAuxiliar);
    }


    const  cantidadEnCarrito= () =>{
        return carrito.reduce((acc, productos) => acc + productos.cantidad, 0);
    }


    const  precioTotal= () =>{
        return carrito.reduce((acc, productos) => acc + productos.precio * productos.cantidad, 0);
    }
    const vaciarCarrito = () =>{
        setCarrito([])
    }


    function crearOrden(){

        if (carrito.length > 0){

        


        const nuevaOrden = {
            nombre:"Agustina Barreto",
            telefono: 23181294809,
            mail:"dnhfiusdhf@gmgkn.com",
            productos: carrito,
        }
        //console.log(nuevaOrden)
        //addDoc(ordersCollection, nuevaOrden)

        addDoc(ordersCollection, nuevaOrden).then(response =>{
            console.log("orden creada correctamente con el id:" + response.id);
            setCarrito([])
        }).catch(err =>{
            alert("Algo fallo , intente nuevamente mas tarde ");
            console.log(err);
        });
    } else{

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El carrito aún esta vacío!",
            
        });
        //console.log("Carrito vacío agrega un articulo!")
    }
    } 


    return(
        <AppContext.Provider value={{productos, carrito, setCarrito, cargarData, agregarAlCarrito, crearOrden, precioTotal, cantidadEnCarrito, vaciarCarrito}}>
            {props.children}
        </AppContext.Provider>
    )
}
