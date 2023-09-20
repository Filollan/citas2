const Paciente = ({ paciente, setPacientes, pacientes, setEditando, setPaciente }) => {
    console.log("paciente")
    const { nombre, propietario, email, alta, sintomas, id } = paciente

    const eliminarPaciente = (id) => {
        const pacienteActualizados = pacientes.filter(
            (pacienteState) => pacienteState.id !== id);
        setPacientes(pacienteActualizados)
    }
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                <span className="text-2xl font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="text-2xl font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">EmaiL:
                <span className="text-2xl font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
                <span className="text-2xl font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
                <span className="text-2xl font-normal normal-case">{sintomas}</span>
            </p>

            <button type="button" className="bg-red-500 text-white rounded-md uppercase hover:bg-red-600"
                onClick={() => { eliminarPaciente(id) }}>Eliminar</button>
            <button type="button" className="bg-indigo-500 p-3 text-white rounded-md uppercase hover:bg-indigo-600"
                onClick={() => {
                    setEditando(true)
                    setPaciente(paciente)
                }}
            >editar</button>
        </div>
    )
}

export default Paciente;