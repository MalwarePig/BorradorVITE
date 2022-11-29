import { useEffect, useState } from 'react'

export function Tarjetas({Personas}) {
  const [personasUS,setPersonasUS] = useState([]) 

  useEffect(()=>{
    setPersonasUS(Personas)
  },[])

  if(Personas.length === 0 ){
    return (
        <h1>Sin datos</h1>
    )
  }

  function eliminar(id) {
    console.log(Personas.filter(persona => persona.id ==! id))
    setPersonasUS(Personas.filter(persona => persona.id ==! id))
  }

  return <div id='Maestros'>
        {
            Personas.map((Persona)=>(
                <div key={Persona.id} id={Persona.id}>
                     <h4>{Persona.Nombre}</h4>
                     <h4>{Persona.Edad}</h4>
                     <button onClick={()=>eliminar(Persona.id)}>Eliminar</button>
                </div>
            ))
        }
  </div>
}


