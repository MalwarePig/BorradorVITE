import {data} from '../../Data/Servidor'
import { useEffect } from 'react'

console.log(data)   

export function Formulario() {
//
    return <>
        <form >
            <input type="text" placeholder="Nombre..." autoFocus/>
            <input type="text" placeholder="Edad..."/>
            <button>Guardar</button>
        </form> 

    </>
}