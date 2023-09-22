import React from 'react'
import './InfoCard.css'

export const InfoCard = ({status , origin , species , gender}) => {

  return (
    <div className='info-card'>
        <div className="info">
            <h3>{`Character Status ${status}`}</h3>
        </div>
        <div className="info">
            <h3>Species</h3>
            <p>{species}</p>
        </div>
        <div className="info">
            <h3>Origin</h3>
            <p>{origin.name}</p>
        </div>
        <div className="info">
            <h3>Gender</h3>
            <p>{gender}</p>
        </div>
    </div>
  )
  
}
