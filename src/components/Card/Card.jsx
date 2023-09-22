import React, { useState } from 'react'
import { InfoCard } from '../InfoCard/InfoCard'
import './Card.css'

export const Card = ({ backImage , name , status , origin , species , gender}) => {

    const [cardOpen , setCardOpen] = useState("character-card")

    // OPEN CARD
    const knowMore = () => { 
        setCardOpen("character-card-open")
    }

    // CLOSE CARD
    const closeKnowMore = () => {
        setCardOpen("character-card")
    }

    return (
        <div className={cardOpen}>
            <div className="picture" style={{ backgroundImage: `url(${backImage})` }}></div>
            <h2>{name}</h2>
            <button id='knowM' onClick={knowMore}>Know More..</button>
            <button id='close' onClick={closeKnowMore}>X</button>
            {cardOpen === "character-card-open" ? <InfoCard status={status} origin={origin} species={species} gender={gender}></InfoCard> : " " }
        </div>
    )
}
