import React from 'react'
import './Error.css'

export const Error = () => {

  return (
    <div className='error'>
        <i className="fa-solid fa-circle-xmark" style={{color: "#ff0000",}}></i>
        <p>Seleccino dos filtros del mismo tipo o no existe un personaje con esas caracteristicas !</p>
    </div>
  )
}
