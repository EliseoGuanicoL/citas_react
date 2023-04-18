import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // SE PUEDEN TENER MAS DE UN useEffect declarados

  //Este useEffect solo se ejecuta una sola vez, con el arreglo vacio.
  useEffect(() => {
    //Convierte String a JSON.
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLS?.length > 0 && setPacientes(pacientesLS);
  }, []);

  useEffect(() => {
    // usando localStorage para mantener los datos, y con JSON.stringify convertir json a string
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])



  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App
