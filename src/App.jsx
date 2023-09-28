import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import QuienesSomos from './Components/QuienesSomos'
import Servicios from './Components/Servicios'
import Contacto from './Components/Contacto'
import GenerarReporte from './Components/GenerarReporte'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importa BrowserRouter, Routes, Route y Link

function App() {
  return (
    <Router> {/* Envuelve tu aplicación con el Router */}
      <div className='container mx-auto mt-20'>
        {/* Define las rutas para tus componentes */}
        <Routes>
          <Route path="/generar-reporte" element={<GenerarReporte />} />
          <Route path="/" element={
            <>
              <div className='sepia'>
                <Header />
              </div>
              <QuienesSomos />
              <Servicios />
              <Contacto />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
