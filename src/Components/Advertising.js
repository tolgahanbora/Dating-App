import React from 'react'
import './Style/ads.css'
import googlePlay from './googleplay.png'
import Apple from './apple.png'
function Advertising() {
  return (
    <div className='container'>
        <div class="row row-cols-1 row-cols-md-2 g-4" id='box'>
  <div class="col">
    <div class="card" id='ads'>
   
      <div class="card-body  rounded-1" id='adsframe'>
        <h3 class="card-text" id='adstext'><b id='adsBold'>You perfect match is just a click away</b></h3>
       
        <div class="col" id='applicationStore'>
        <a href={"google.com"}><img src={Apple}  class="rounded float-start" alt="Apple Store" id='apple'/></a>
        <img src={googlePlay} class="rounded float-end" alt="Apple Store" id='google'/>
      </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  
  )
}

export default Advertising