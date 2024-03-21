import React from 'react'
import './Design.css'
import MAP from './Map.jpg'
import MAIL from './MAIL.gif'
import PHONE from './PHONE.png'
// import IMG from './About.gif'

function Contact() {
  return (
    <>
    {/* <img src={IMG} className='image' alt='/' /> */}
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
    </>
  )
}

export default Contact
