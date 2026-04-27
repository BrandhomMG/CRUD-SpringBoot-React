const URL = "http://localhost:8080/usuarios";

export const obtenerUsuarios = () => {
    return fetch(URL).then(res => res.json());
};

export const CrearUsuario = (usuario) => {
    return fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(res => res.json());
};

export const EliminarUsuario = (id) =>{
    return fetch(`http://localhost:8080/usuarios/${id}`, {
        method: "DELETE"
    });
};

export const EditarUsuario = (id, usuario) =>{
    return fetch(`http://localhost:8080/usuarios/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    }).then(res => res.json());
};