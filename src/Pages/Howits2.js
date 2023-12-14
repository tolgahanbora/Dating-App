import React from 'react'
import {Vector ,
 Vector2 ,
 Vector3 ,
 Vector4 ,
 videoChat ,
 dateFood ,
 gaming ,
 chill ,
 message } from '../MediaIcons/index.js'
import "../Style/Howits2.css"
function Howits2() {
  return (

       <div className='container ' id='howits2Container'>
            <div className='row' id='howitsROW'>
                <div className='col mt-1'>
                    <h3 id="howitsh3"><b>How It Works ?</b></h3>
                    <p>Take advantage of going on the perfect date you have in mind. You deserve the best date on your own terms</p>
                    <ul class='liste'>
                        <li className='itemlist'><img src={Vector} alt='icon' className='iconclass2'/>   Finding the perfect match</li>
                        <li className='itemlist' ><img src={Vector} alt='icon' className='iconclass2'/>   Chat and video call</li>
                        <li className='itemlist' ><img src={Vector} alt='icon' className='iconclass2'/>   Find match near you</li>
                        <li className='itemlist' ><img src={Vector} alt='icon' className='iconclass2'/>   Special discounts for plans</li> 
                    </ul>
                </div>
                <div className='col ' id='secondsa'>
                    <div className='card border border-0' id='firstcard'>
                    <img src='https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png' alt='icon' className='vectorgroup'  class="img-thumbnail"/>
                        <div class="card-body"   className='firstbody'>
                     
                            <h5 class="card-title"  className='firstbody'><b className='firstbody'>Create Profile</b></h5>

                            <p class="card-text"  className='firstbody'>Get ready to match by entering your personal information.</p>

                        </div>
                    </div>
                    <div className='card border border-0' id='secondcard'>
                    <img src={Vector2} alt='icon' id='heart'  class="img-thumbnail"/>
                        <div class="card-body"  className='secondbody'>
                   
                            <h5 class="card-title"  className='secondbody'><b className='secondbody'>Find Match</b></h5>

                            <p class="card-text"  className='secondbody'>Start finding the best
                                match for you.</p>

                        </div>
                    </div>
                    <div className='card border border-0' id='thirdcard' >
                    <img src={Vector3} alt='icon' className='vectorgroup'  class="img-thumbnail"/>
                        <div class="card-body"   className='thirdbody'>
                      
                            <h5 class="card-title"   className='thirdbody'><b className='thirdbody'>Connected</b></h5>

                            <p class="card-text"  className='thirdbody'>Start chat to connect with your match.</p>

                        </div>
                    </div>
                    <div className='card border border-0' id='fourthcard'>
                    <img src={Vector4} alt='icon' className='vectorgroup'  class="img-thumbnail"/>
                        <div class="card-body"    className='fourthbody' >

                            <h5 class="card-title"   className='fourthbody'><b className='fourthbody'>Start Dating</b></h5>

                            <p class="card-text"  className='fourthbody'>Time to meet your
                                match</p>

                        </div>
                    </div>

                </div>
            </div>
        
        <div class="row" id='firstrow2'>
            <div class="col-6 " >
                <h2><b>Answer the questions</b></h2>
                <p class="howitsText2">Help the other party get to know you better by answering specific questions.An answer may be very important to you. You can choose your partners accordingly.</p>
            </div>
            <div class="col-6">
                <img src={message} class="howitsImage2" id='messagePNG' alt="message"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6 asks">
                <h2><b>Start Video Chatting</b></h2>
                <p class="howitsText2">Here is the beginning of the exact match ! get to know your partner. ask him questions and relax.</p>
            </div>
            <div class="col-6">
                <img src={videoChat} class="howitsImage2" id='videchatPNG' alt="Video Chat"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6 asks">
                <h2><b>Play a game</b></h2>
                <p class="howitsText2">We need fun when flirting ! you can play games while video talking. It's like flipping a bottle, a word-asking game.</p>
            </div>
            <div class="col-6">
                <img src={gaming} class="howitsImage2" alt="Playing game with date"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6 asks">
                <h2><b>a Dinner Date</b></h2>
                <p class="howitsText2">Chatting with someone while having dinner.. We've all needed this from time to time. Here is a romantic date with your flirt while eating</p>
            </div>
            <div class="col-6">
                <img src={dateFood} class="howitsImage2" id='dinnerPNG' alt="Dating with dinner"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6 asks">
                <h2><b>Netflix & Chill</b></h2>
                <p class="howitsText2">Watching movies together from netflix while video chatting.. what more could it take for two people to get to know each other? You can choose your partners accordingly.</p>
            </div>
            <div class="col-6">
                <img src={chill} class="howitsImage2" id='chillPNG' alt="netflix&chill"/>
            </div>
        </div>
        </div>

  )
}

export default Howits2