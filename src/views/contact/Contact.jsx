import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import './Contact.css'

export const Contact = () => {

  return (
    <div className="contact">
        <NavBar verde={"#b1f0dc"} azulLetra={"#344D67"} dondeEstoy={"contact"}/>
        <div className="prueba">
        <form action="">
          <div className="title">
            <h2>Contact</h2>
            <p>Leave us your information so we can contact you</p>
          </div>
          <div className="inputs">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" id='name'/>
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" id='email'/>
            </div>
          </div>
          <div className="messege">
            <label htmlFor="messege">Messege</label>
            <textarea name="messege" id="messege" cols="30" rows="10"></textarea>
          </div>
          <div className="button">
            <button type="submit">Send</button>
          </div>  
        </form>
        </div>
    </div>
  )
  
}
