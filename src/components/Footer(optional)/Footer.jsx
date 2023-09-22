import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
        <p>Developed by Francisco Meglia</p>
        <div className="icons">
        <a href="https://www.linkedin.com/in/franciscomeglia/" target='blank'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/FranciscoMeglia" target='blank'><i className="fa-brands fa-square-github"></i></a>
        <a href="https://www.instagram.com/fran_meglia/" target='blank'><i className="fa-brands fa-square-instagram"></i></a>
        </div>
    </footer>
  )
}
