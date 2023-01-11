import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from './logo.png'
import twitter from './MediaIcons/twitter.png'
import face from './MediaIcons/face.png'
import youtube from './MediaIcons/yt.png'
import instagram from './MediaIcons/insta.png'
import './Style/footer.css'
function Footer() {
  return (
    
    <div class='container-lg'><footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
      <img src={logo} class="img-thumbnail" alt="footerlogo" className='logo'/>
      </a>
      
    </div>

    <div class="col-md mb-3" id='emptycolumn'>

    </div>

    <div class="col-md mb-3" id='maincolumn'>
      <h5>Quick Links</h5>
      <ul class="nav flex-column" >
      
        <NavLink to='/' class="nav-item mb-2" className="navItems">Home</NavLink>
        <NavLink to='/howits' class="nav-item mb-2" className="navItems">How It Works</NavLink>
        <NavLink to='/about' class="nav-item mb-2" className="navItems">About</NavLink>
        <NavLink to='/contact' class="nav-item mb-2" className="navItems">Contact Us</NavLink>
       
     
      </ul>
    </div>

    <div class="col-md mb-3">
      <h5>Support</h5>
      <ul class="nav flex-column">
      <NavLink to='/privacy' class="nav-item mb-2" className="navItems">Privacy & Policy</NavLink>
        <NavLink to='/terms' class="nav-item mb-2"className="navItems">Terms & Conditions</NavLink>
        <NavLink to='/cookies' class="nav-item mb-2"className="navItems">Cookies Policy</NavLink>
        <NavLink to='/contact' class="nav-item mb-2" className="navItems">Contact Us</NavLink>
      </ul>
    </div>

    <div class="col-md mb-3">
      <h5>Download</h5>
      <ul class="nav flex-column">
      <NavLink to='/' class="nav-item mb-2" className="navItems">Download IOS</NavLink>
        <NavLink to='/' class="nav-item mb-2" className="navItems">Download Android</NavLink>
      </ul>
    
      
    </div>  
  </footer> 
  <img src={face} class="img-thumbnail border border-dark rounded-0" alt="Meta" id='meta'/>
      <img src={twitter} class="img-thumbnail border border-dark rounded-0" alt="Twitter" id='twitter' />
      <img src={youtube} class="img-thumbnail border border-dark rounded-0" alt="Youtube" id='youtube' />
      <img src={instagram} class="img-thumbnail border border-dark rounded-0" alt="Instagram" id='instagram'/>
  <p class="text" id='copyright'>Copyright 2022 <span id='coupling'>Coupling </span>LLC. All Rights Reserved Created By <span className='footerscolor'>Tolgahan Bora</span > Designed By <span className='footerscolor'>  Cuma Can Polat  </span></p></div>
  )
}

export default Footer