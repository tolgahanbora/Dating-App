import React from 'react'
import './Style/SliderStyle.css'
import couple from './couple.png'

function Slider() {
  return (
    <div>
    <div className='container'id='containerSlider'>
        <div className='row g-2'>
            <div className='col-6'>
                <p id='Slogan'><b>Perfect Match!<br/> Date or Buddy</b></p>
                <p id='article'>The easiest way to find the person you are looking for. Find people near you, chat with them and go on a date. Come on now it's time to set up your first date.</p>
                <button type="button" id='firstBTN' class="btn btn-outline-danger rounded-1 ">App Store</button>
                <button type="button" class="btn btn-outline-danger rounded-1 " id='playstoreslider'>Play Store</button>
            </div>
            <div className='col-6' id='imageCol'>
    
            <img src={couple} class="img-fluid rounded-4 " alt="pics" id='photos' />
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Slider