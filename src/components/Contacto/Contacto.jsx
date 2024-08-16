import React, {useState} from "react";
import "./contact.css"

const Contacto = () => {

    const[valores, setValores] = useState({
        nombre:"",
        apellido:"",
        email:"",
        telefono:"",
        direccion:"",
        mensaje:""
    });

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Enviado",valores)
        }

        const handleValores = (e) =>{
            setValores({
                ...valores,
                [e.target.name]:e.target.value
            })
        }
    return(
        <>
            
                <div className="container">
                    <h1 className="title">Contacto</h1>
                    <form  className="formulario" onSubmit={handleSubmit}>
                    <input 
                            type="text"  
                            placeholder="Nombre"
                            value={valores.nombre}
                            onChange={handleValores}
                            name="nombre"
                            />

                    <input 
                            type="apellido" 
                            placeholder="Apellido"
                            value={valores.apellido}
                            onChange={handleValores}
                            name="apellido"
                            />

                    <input 
                            type="email" 
                            placeholder="Ingresa tu email"
                            value={valores.email}
                            onChange={handleValores}
                            name="email"
                            />

                    <input 
                            type="telefono" 
                            placeholder="Ingresa un numero de contacto"
                            onChange={handleValores}
                            name="telefono"
                            />

                    <input 
                            type="direccion" 
                            placeholder="Direccion:"
                            value={valores.domicilio}
                            onChange={handleValores}
                            name="direccion"
                            />
                    
                    <input className="diferente"
                            type="mensaje" 
                            placeholder="Te dejamos un espacio por si quieres hacernos un comentario:"
                            value={valores.mensaje}
                            onChange={handleValores}
                            name="mensaje"
                            />

                    <button type="submit">Enviar</button>
                    </form>
                </div>
            
        </>
    )
}

export default Contacto;