import { useEffect, useState } from 'react'



export function Formulario({ addPerson }) {

    const [nombreUS, setNombre] = useState("")
    const [edadUS, setEdad] = useState("")

    useEffect(() => {
        setNombre(nombreUS);
    })

    useEffect(() => {
        setEdad(edadUS);
    })

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleEdad = (e) => {
        setEdad(e.target.value);
    }

    function handleSubmit(e) { 
        e.preventDefault();
       
        addPerson(nombreUS,edadUS)

        setNombre("");
        setEdad("");
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholde="Nombre..." autoFocus onChange={handleNombre} value={nombreUS}/>
            <input type="text" placeholde="Edad..." onChange={handleEdad} value={edadUS}/>
            <button >Guardar</button>
        </form>
    </>
}
