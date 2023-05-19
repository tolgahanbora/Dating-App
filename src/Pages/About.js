import React from 'react'
import about from '../MediaIcons/about.png'
import '../Style/aboutStyle.css'
function About() {
  return (
 

    
    <div class="container" id='aboutss'>
      <div class="row">
        <div class="col">
        <h1 id='aboutH1'><b>About Us</b></h1>
        <div id='paragraph'>
        <p>Couplings is a dating app startup founded with the aim of providing the perfect match</p>
        <p>There are many differences from the actively used dating apps.The most important thing is that it is the dating application that is the least likely to be a fake account</p>
        <p>In other applications,you can only chat with chat, while <span id='special'>Couplings offers the ability to chat only with video</span>. With artificial intelligence support,+18 images permanently block the device from logging into the application as HWID.</p>
        </div>
        </div>



        <div class="col">
        <img src={about} class="img-fluid rounded-4 " alt="pics" id='photos3' />
        </div>
      </div>
    </div>
    
  )
}

export default About