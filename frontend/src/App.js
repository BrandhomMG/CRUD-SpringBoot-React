/*Este es el CEREBRO */
import { ToastContainer } from 'react-toastify';//Es un contenedor donde apareceran los toasts
import { toast } from 'react-toastify';//Este es el que se usa para las notificaciones
import 'react-toastify/dist/ReactToastify.css';//Son los estilos de los toast
import './App.css';//Es mi css local
import { useEffect, useState } from 'react';//useState crea variables para guardar datos y useEffect ejecuta codigo de manera automatica
import ListaUsuarios from './components/ListaUsuarios';//Este es el componente que sirve para mostrar los usuarios
import FormularioUsuario from './components/FormularioUsuario';//Aquí traigo lo de mi archivo FormularioUsuario
import {obtenerUsuarios, CrearUsuario, EliminarUsuario, EditarUsuario} from './services/usuarioService';//Son las funciones de mi servicio todo lo de editar, agregar o eliminar
import './style.css';//El estilo que cree





function App() { //Funcion principal que regresa en HTML
  const [usuarios, setUsuarios] = useState([]); //Se crea un array con 2 cosas el primero es usuarios que es donde estaran los valores y setUsuarios es lo que sirve para actualizar

  useEffect(() =>{//useEffect es un hook que ejecuta codigo cuando el componente se crea, cambia un dato o se llama a la Api => esto es como poner function, pero de forma mas corta
   obtenerUsuarios()// Este es mi API mi Back que hace peticiones HTTP y en este caso hace un Get en automatico
                    //.then es promesa osea cuando esto termine haz esto, response es una respuesta, luego funcion flecha, luego response.json es conviertelo en json, entonces toda la linea es cuando llegue la respuesta conviertela en JSON
      .then(data =>{//Nuevamente una promesa cuando se tengan los datos y data viene de la respuesta de JSON que es un array u objeto
      console.log(data); // Y solo se imprimen los datos en consola los de data
      setUsuarios(data);// Aquí setUsuarios es mi función donde renderiza los datos de usuarios, entonces tomo los datos y los guardo en usuarios
    })
    .catch(error => console.error("ERROR", error));// .catch atrapar el error, error funcion flecha el error y console.error lo muestra en consola rojo
  }, []);//La linea useEffect(() =>{ y esta ultima linea es la estructura y todo lo de adentro es el codigo que se ejecutara y esto [] como viene vacio solo se ejecuta 1 vez

  const agregarUsuario = (usuario) => {//Creo la función flecha agregar usuario y le digo que tendra un parametro llamado usuario
  CrearUsuario(usuario)//Esta función viene de mis servicios
    .then(data => {//.then es una promesa de que se debe cumplir y data la respuesta del backend
      setUsuarios([...usuarios, data]);//Agregar al nuevo usuario sin borrar los anteriores, este es mi array de arriba el que sirve para actualizar

      toast.success("Usuario agregado");//Notificación de toast
    })
    .catch(() => {//Atrapa el error
      toast.error("Error al agregar usuario");//Envia notificación de error
    });
};

  const borrarUsuario = (id) =>{//Creo la función borrarUsuario con el parametro id
    EliminarUsuario(id).then(() => {//Esta función viene de mis servicios y tiene el parametro id y hago una promera con then
      setUsuarios(usuarios.filter(u => u.id !== id));//Nuevamente mi array que sirve para actualizar y al hacer usuarios.filter es para que recorra el array y es como quedate con todo menos con el id eliminado
    });
  };

  const [modificarUsuario, setmodificarUsuario] = useState(null);//un array que es modificarUsuarios y el que lo modificara, esto inicia vacio

  const editaruser = (usuario) => {//funcion editar usuario con parametro usuario
    setmodificarUsuario(usuario);//Esto hace que se guarde el usuario a modificar en modificarUsuario
  };

  const actualizar = (usuario) => {//Función flecha actualizar con el parametro usuario, pero usuario ya viene del formulario ya editado
    EditarUsuario(modificarUsuario.id, usuario).then(data => {//Este es el servicio PUT de mis servicios y estoy diciendo que modifique el usuario con este id modificarusuario.id original y usuario es el nuevo, la promesa y data lo que viene del back
      setUsuarios(//Es el que sirve para actualizar el array
        usuarios.map(u => u.id === modificarUsuario.id ? data : u)//usuarios es el array y .map recorre todo el array y crea uno nuevo y si este es el usuario que estoy editando cambialo y si no dejalo igual
      );

      setmodificarUsuario(null);//Es para salir del modo edición
    });
  }

  return (//Devuelve el HTML
   <div className="container mt-4"> {/*Estoy creando el contenedor principal aquí no es class es classname */}
      <h1 className="text-center mb-4">Lista de Usuarios</h1>{/*Etiqueta normal centrado*/}

      <ListaUsuarios 
        usuarios = {usuarios}//{/* Listausuarios es mi función de ListaUsuarios.js después usuarios es la propiedad de ListaUsuarios y lo que esta entre llaves es la variable mi array donde están los datos eso lo defini en app.js */}
        Eliminar ={borrarUsuario}//Envio lo que le haga falta a ListaUsuarios para funcionar lo de eliminar
        onEditar ={editaruser}//Lo mismo, aquí es la logica para realizar la acción y el hijo osea ListaUsuarios el hijo y usa esos datos
      />
      <FormularioUsuario 
        onCrear = {agregarUsuario}//Prop para crear usuario
        onActualizar = {actualizar}//Editar usuario
        modificarUsuario = {modificarUsuario}//El usuarios que estoy editando si es que entran en ese 
      />
      <ToastContainer/>{/*Se renderiza los mensajes */}
    </div>
  );
}

export default App;
