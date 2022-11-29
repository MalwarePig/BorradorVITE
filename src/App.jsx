import reactLogo from './assets/react.svg'
import { Formulario } from './Componentes/Formularios/Formulario'
import { Tarjetas } from './Componentes/Tarjetas/Tarjetas'

export function App() {

  return (<main className='bg-gray-900 h-screen text-white'>
    <div className='container mx-auto'>
      <Formulario />
      <Tarjetas />
    </div>

  </main>)
}




