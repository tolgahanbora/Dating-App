import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Style/howits.css'
import Vector from './Vector.png'
import Vector2 from './Vector2.png'
import Vector3 from './Vector3.png'
import Vector4 from './Vector4.png'
function Howits() {



    const navigate = useNavigate()

    return (
        <div className='container ' >
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
                    <button type="button" class="btn btn-danger btn-lg rounded-1" id='click' onClick={() => navigate('/Howits')}>Read More </button>
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
        </div>
    )
}

export default Howits