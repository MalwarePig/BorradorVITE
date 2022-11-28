import { useEffect, useState } from 'react'
import { data } from '../../Data/Servidor'

export function Tarjetas() {
  const [tareaUS, setTareaUS] = useState([])

  useEffect(() => {
    setTareaUS(data)
  })

  if(data.length === 0 ){
    return (
        <h1>Sin datos</h1>
    )
  }
  return <div id='Maestros'>
        {
            data.map((Persona)=>(
                <div key={Persona.Nombre}>
                     <h4>{Persona.Nombre}</h4>
                     <h4>{Persona.Edad}</h4>
                </div>
            ))
        }
  </div>
}
