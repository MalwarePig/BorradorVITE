import { createContext } from "react";
import { data } from '../Data/Servidor'
import { useState, useEffect } from 'react'

export const PersonaContext = createContext();//es el nombre del contexto

export function PersonaContextProvider(props) {//es el proveedor
    const [dataPersonas, setdataPersonas] = useState(data);

    useEffect(() => {
        setdataPersonas(data) 
    }, []);
 
    function addPerson(nombreUS, edadUS) {
        const Persona = {
            Nombre: nombreUS,
            Edad: edadUS,
            id: dataPersonas.length
        }

        console.log(Persona)
        setdataPersonas([...dataPersonas, Persona])
        
        console.log("final")
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