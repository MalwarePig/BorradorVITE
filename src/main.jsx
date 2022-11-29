import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { PersonaContextProvider } from './context/functionsContext'
import  './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonaContextProvider>
      <App />
    </PersonaContextProvider>

  </React.StrictMode>
)
















