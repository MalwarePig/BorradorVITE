import { useEffect, useState, useContext } from 'react'
import { PersonaContext } from '../../context/functionsContext'


export function Tarjetas() {
  const { data, deletePerson } = useContext(PersonaContext)//Extraigo los valores de contexto

  const [personasUS, setPersonasUS] = useState([])


  useEffect(() => {
    setPersonasUS(data)
  }, [personasUS,data])



  if (personasUS.length === 0) {
    return (
      <h1 className='font-bold text-center text-4xl mt-5'>Sin datos</h1>
    )
  }

  function eliminar(id) {
    deletePerson(id)
  }

  return <div id='Maestro' className='grid grid-cols-4 gap-4'>
    {
      personasUS.map((Persona) => (
        <div key={Persona.id} id={Persona.id} className='bg-gray-800 p-2 rounded-md'>
          <h4 className='text-xl font-bold capitalize'>{Persona.Nombre}</h4>
          <h4 className='text-gray-400 text-sm'>{Persona.Edad}</h4>
          <button onClick={() => eliminar(Persona.id)} className='bg-red-800 px-2 py-1 rounded-md mt-4 hover:bg-red-600'>Eliminar</button>
        </div>
      ))
    }
  </div>
}


