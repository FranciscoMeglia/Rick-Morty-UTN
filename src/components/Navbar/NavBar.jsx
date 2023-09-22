import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = ({verde , azulLetra , dondeEstoy }) => {

  // STATE FOR THE "CHARACTER" BUTTON
  const [isHovering , setIsHovering] = useState(false)
  // STATE FOR THE "CONTACT" BUTTON
  const [isHovering2 , setIsHovering2] = useState(false)
  // STATE TO SHOW OR UNSHOW NAV
  const [nav , setShowNav] = useState(false)

  // FUNCTION TO CHANGE THE BUTTON STATE WHEN MOUSE IS OVER
  const mouseOver = (e) => {

    if(e.target.id === "character") {

      setIsHovering(true)

    } else if(e.target.id === "contact") {

      setIsHovering2(true)

    }

  }

  // FUNCTION TO CHANGE THE BUTTON STATE WHEN MOUSELEAVE
  const mouseLeave = (e) => {

    if(e.target.id === "character") {

      setIsHovering(false)

    } else if(e.target.id === "contact") {

      setIsHovering2(false)

    }

  }

  // SHOW NAV
  const showNav = () => {
    setShowNav(true)
  }

  // UNSHOW NAV
  const unshowNav = () => {
    setShowNav(false)
  }
 
  // CONDITIONAL TO KNOW WHERE IS THE USER , IF THE USER ARE IN CHARACTERS OR CONTACT
  if (dondeEstoy === "character") {

    return (
      <nav className={nav ? "nav-open" : "nav"}>
        <div className="title">
          <Link to={"/"}><h2>Rick & Morty</h2></Link> 
          {nav ? <i className="fa-solid fa-square-xmark btnClose" onClick={unshowNav}></i> : ""}
        </div>
        <div className={nav ? "routes-open" : "routes"}>
  
          <Link to={"/characters"} 
  
            id='character'
            style={{
            backgroundColor: isHovering ? verde : verde, 
            color: isHovering ? azulLetra : azulLetra }}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}
  
            >Character</Link>
  
          <Link to={"/contact"} 
  
            id='contact'
            style={{
            backgroundColor: isHovering2 ? verde : "transparent",
            color: isHovering2 ? azulLetra : verde }}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}
            >Contact</Link>
  
        </div>
        {nav ? "" : <i className="fa-solid fa-bars navBtn" onClick={showNav}></i>}
      </nav>
    )
  } else if (dondeEstoy === "contact") {

    return (
      <nav className={nav ? "nav-open" : "nav"}>
        <div className="title">
          <Link to={"/"}><h2>Rick & Morty</h2></Link> 
          {nav ? <i className="fa-solid fa-square-xmark btnClose" onClick={unshowNav}></i> : ""}
        </div>
        <div className={nav ? "routes-open" : "routes"}>
  
          <Link to={"/characters"} 
  
            id='character'
            style={{
            backgroundColor: isHovering ? verde : "transparent", 
            color: isHovering ? azulLetra : verde }}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}
  
            >Character</Link>
  
          <Link to={"/contact"} 
  
            id='contact'
            style={{
            backgroundColor: isHovering2 ? verde : verde,
            color: isHovering2 ? azulLetra : azulLetra }}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}
            >Contact</Link>
  
        </div>
        {nav ? "" : <i className="fa-solid fa-bars navBtn" onClick={showNav}></i>}
      </nav>
    )
  } 
}

