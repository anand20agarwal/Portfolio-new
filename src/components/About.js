import React from 'react'
import './Design.css'
import HTML from './html.png'
import CSS from './css.png'
import JAVASCRIPT from './javascript.jpg'
import REACT from './React.png'
import SQL from './SQL.png'
import GITHUB from './GITHUB.jpg'
import GIT from './GIT.png'

function About() {
  return (
    <div className='contain-about'>
      <hr/>
      {/* <div className='about'> */}
        <h3 className='about-h'> About Me</h3>
        <hr/>
        <p className='about-para'>Hello there! My name is Anand Agarwal. I am a Post Grad Student @ TJC, and I'm very passionate about Front-End development.<br/><br/>

I am dedicated, and have acquired the skills and knowledge necessary to make a project a success.<br/><br/>

I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time.</p>
      {/* </div> */}
      <hr/>
      <h2>Skills</h2>
      <hr/>
     
      <div className='button-container'>
      <button className='html-button'>
      <img src={HTML} className='image-html' alt='/' />
      <div className='html-name'> HTML </div></button>


      <button className='html-button2'>
      <img src={CSS} className='image-html' alt='/' />
      <div className='html-name'> CSS </div></button>


      <button className='html-button3'>
      <img src={JAVASCRIPT} className='image-html' alt='/' />
      <div className='html-name'> JAVASCRIPT </div></button>
      </div>
    
      <button className='html-button4'>
      <img src={REACT} className='image-html' alt='/' />
      <div className='html-name'> REACT JS </div></button>

      <button className='html-button4'>
      <img src={SQL} className='image-html' alt='/' />
      <div className='html-name'> MY SQL </div></button>

      <br/>

      <button className='html-button4'>
      <img src={GITHUB} className='image-html' alt='/' />
      <div className='html-name'> GITHUB </div></button>

      <button className='html-button4'>
      <img src={GIT} className='image-html' alt='/' />
      <div className='html-name'> GIT </div></button>
      <br/>
      <br/>

      <hr/>
      <h2>
        Education
        </h2>  <hr/>
          <div className='year1'>2022 - 2024</div>
          <div className='=clg1'>
            <h2>T JOHN College</h2>
          </div>


      </div>

     
      
      
    
  )
}

export default About
