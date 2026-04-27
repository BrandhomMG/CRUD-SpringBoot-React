import { useEffect, useState } from "react"; //useState crea variables para guardar datos y useEffect ejecuta codigo de manera automatica
import { toast } from 'react-toastify'; // Este sirve para enviar notificaciones como alertas o así


function FormularioUsuario({onCrear, modificarUsuario, onActualizar}){// Creo la función Formulario y estos son Props de manera desestructurada en lugar de uno por uno, estos no los creo aquí vienen de mi app.js
    const [nombre, setNombre] = useState("");// Aquí estoy haciendo lo mismo de desestructuración donde creo un array que es nombre y setNombre que es el que va a cambiar el valor y se inicializa como una cadena de texto vacia
    const [email, setEmail] = useState("");// Lo mismo que lo de arriba, pero para email

    const validar = () => {// Estoy creando una función flecha sin parametros porque estan vacios los parentesis y el nombre de la función es validar
        if(!nombre.trim()){//Si nombre esta vacio va a enviar el mensaje de error, trim elimina espacios
            toast.error("Nombres es un campo obligatorio");//notificación de error
            return false;//Detiene la acción
        }

        if(!email.trim()){//El mismo codigo que para nombre Si el email 
            toast.error("Correo es un campo obligario");
            return false;
        }

        const estructura_correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// es la expresión regular REGEX, debe tener formato de correo

        if(!estructura_correo.test(email)){//Si no cumple la estructura del correo el campo email manda la notificación
            toast.error("Correo invalido");
            return false;
        }

        return true;//Si no entra a ningún if no retornara false si no este true y permitira la acción
    };


    useEffect(() => {//useEffect es un hook que ejecuta codigo cuando el componente se crea, cambia un dato o se llama a la Api => esto es como poner function, pero de forma mas corta
        if(modificarUsuario){//Aquí estoy haciendo uso del Prop modificar usuario que si lo usan entra aquí y va a modificar el nombre o correo
            setNombre(modificarUsuario.nombre);// Aquí estoy tomando el dato y lo estoy colocando en el formulario para editar no estoy editandolo aquí
            setEmail(modificarUsuario.email);//Lo mismo que en nombre, llena el formulario de manera automatica
        }
    }, [modificarUsuario]);//Ejecuta esto cada que cambie modificarUsuario

    const enviar = () => { //creo la función flecha enviar

        if(!validar()) return;//Si validar no es valido no ejecuta 

        if(modificarUsuario){//Si entraron en modificar usuario
            onActualizar({nombre, email});// Entonces ahora si va editar los datos
        } else {//caso contrario
            onCrear({nombre, email});//Lo va a crear en lugar de editar
        }

        setNombre("");//Reinicia el formulario
        setEmail("");//Repite lo mismo
        };

    return(//Lo que el usuario visualiza
        <div className="card p-4 shadow-sm mb-4">{/*Contenedor todo lo que estara dentro y aparte bootstrap estilo */}
            <h4 className="mb-3">Agregar / Editar Usuario</h4>{/*Etiqueta con texto */}

            <input
            className="form-control mb-2"
            placeholder="Nombre"//Lo que se encuentra en la caja de texto
            value={nombre}//Este viene del const [nombre, setNombre] muestra un valor 
            onChange={(e) => setNombre(e.target.value)}//Toma lo que escribio y actualiza el dato
            />

            <input
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}//Se repite lo mismo que en nombre
            />

            <button className="btn btn-success w-100" onClick={enviar}>{/* Boton onClic cuando le den clic hara la acción de la función enviar */}
                {modificarUsuario ? "Actualizar" : "Agregar"}{/*Este es una condición donde si entran en modificarusuario mostrara actualizar y si no agregar */}
            </button>
        </div>//Cierre del contenedor
    )
}

export default FormularioUsuario;//Permite usarlo en otros archivos 