import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Formulario } from './Componentes/Formularios/Formulario'
import { Tarjetas } from './Componentes/Tarjetas/Tarjetas'
import { data } from './Data/Servidor'

export function App() {
  const [dataPersonas, setdataPersonas] = useState([]);

  useEffect(() => {
    setdataPersonas(data)
  }, []);

  function addPerson(nombreUS, edadUS) {
    const Persona = {
      Nombre: nombreUS,
      Edad: edadUS,
      id: dataPersonas.length
    }
    setdataPersonas([...dataPersonas, Persona])
  }


  return (<>
    <Formulario addPerson={addPerson} />
    <Tarjetas Personas={dataPersonas} />
  </>)
}




