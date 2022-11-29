import { useEffect, useState, useContext } from 'react'
import {PersonaContext} from '../../context/functionsContext'

export function Formulario() {

    
const { addPerson } = useContext(PersonaContext)//Extraigo los valores de contexto

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

    return <main className='bg-stone-500 p-10 mb-4 max-w-md mx-auto'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholde="Nombre..." autoFocus onChange={handleNombre} value={nombreUS} className='bg-slate-300 p-3 w-full mb-2 text-black'/>
            <input type="text" placeholde="Edad..." onChange={handleEdad} value={edadUS} className='bg-slate-300 p-3 w-full mb-2 text-black'/>
            <button className='bg-indigo-800 p-2 rounded-md hover:bg-indigo-600'>Guardar</button>
        </form>
    </main>
}
