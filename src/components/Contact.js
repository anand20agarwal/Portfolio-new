import React from 'react'
import './Design.css'
import MAP from './Map.jpg'
import MAIL from './MAIL.png'
import PHONE from './PHONE.png'

function Contact() {
  return (
    <div className='contain-contact'>
      <br/>
      <br/>
      <hr/>
      <h2>Get In Touch</h2>
      <hr/>
      <div className='contact-add'>

     <button className='btn-1'>
       <img src={MAP} className='map' alt="/"></img>
        <div className='map-name'>Bangalore,Karnataka,India</div>
     </button>

     <button className='btn-1'>
       <img src={MAIL} className='map' alt="/"></img>
        <div className='map-name'>anandagarwaljob@gmail.com</div>
     </button>

     <button className='btn-1'>
       <img src={PHONE} className='map' alt="/"></img>
        <div className='map-name'>+91 8892145195</div>
     </button>
     

    </div>
    </div>
  )
}

export default Contact
