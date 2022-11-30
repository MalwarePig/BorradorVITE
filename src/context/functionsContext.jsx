import { useState, useEffect, createContext } from 'react'
import { loadData } from '../Data/Servidor'

export const PersonaContext = createContext();//es el nombre del contexto

export function PersonaContextProvider(props) {//es el proveedor
    const [dataPersonas, setdataPersonas] = useState(loadData());

    useEffect(() => {
        
       console.log("Effect ")
       console.log(dataPersonas)
    },[]);

    function addPerson(nombreUS, edadUS) {
        const Persona = {
            Nombre: nombreUS,
            Edad: edadUS,
            id: dataPersonas.length
        }
        console.log(Persona)
        console.log(dataPersonas)
        setdataPersonas([...dataPersonas, Persona])
        console.log(dataPersonas)
    }

    function deletePerson(id) {
        console.log(id)
        console.log(dataPersonas[0].id)
        console.log(dataPersonas.filter(persona => persona.id !== id))
        setdataPersonas(dataPersonas.filter(persona => persona.id !== id))
    }



    return (
        <PersonaContext.Provider value={{
            data: dataPersonas,
            addPerson: addPerson,
            deletePerson: deletePerson
        }}>
            {props.children}
        </PersonaContext.Provider>
    )
}