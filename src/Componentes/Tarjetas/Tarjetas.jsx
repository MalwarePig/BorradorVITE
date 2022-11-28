import { useEffect, useState } from 'react'

export function Tarjetas({Personas}) {
  

  if(Personas.length === 0 ){
    return (
        <h1>Sin datos</h1>
    )
  }

  function eliminar(params) {
    alert("Borrando: "+params)
  }
  return <div id='Maestros'>
        {
            Personas.map((Persona)=>(
                <div key={Persona.id} id={Persona.id}>
                     <h4>{Persona.Nombre}</h4>
                     <h4>{Persona.Edad}</h4>
                     <button onClick={()=>eliminar("ss")}>Eliminar</button>
                </div>
            ))
        }
  </div>
}


