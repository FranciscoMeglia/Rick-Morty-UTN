import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {

  return (
    <div className='home'>
        <div className="card">
            <h1>Proyect Rick & Morty</h1>
            <h2>Helcome to Rick & Morty Proyect!</h2>
            <p style={{paddingTop: "20px"}}>This proyect was made for practising React and to made a functional website</p>
            <p>In this website you can know information of the characters of this animated series.</p>
            <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
            <h3>Lets go!</h3>
            <div className="routes">
                <Link to={"/characters"}>Characters</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </div>
    </div>
  )
  
}


