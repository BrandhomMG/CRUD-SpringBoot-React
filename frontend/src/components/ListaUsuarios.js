function ListaUsuarios({usuarios, Eliminar, onEditar}){
    return(
        <table className="table table-striped table-bordered shadow-sm">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {usuarios.map(usuario=> (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.email}</td>
                        <td>
                            <button className="btn btn-warning btn-sm me-2" onClick={() => onEditar(usuario)}> Editar </button>

                            <button className="btn btn-danger btn-sm" onClick={() =>{
                                if(window.confirm("Deseas eliminar este usuario?")){
                                    Eliminar(usuario.id);
                                }
                            }}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListaUsuarios;