import React from 'react'
import "../Style/questionCard.css"

import { FaCrown } from 'react-icons/fa';
import { TbReload } from 'react-icons/tb';


function QuestionGameCard() {
  return (
    <div className="container mt-3" style={{ width: "120%" }}>
      <div className='row'>
        <div className='col-12'>
          <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#D23C3C" }}>Question Game</h4>
          

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
  <div id='questionDiv' className='questionDiv' style={{ backgroundColor: "#FED9D5", height: "40px", marginTop: "25px", marginBottom: "10px", width: "fit-content", textAlign: "center", justifyContent: "center", alignContent: "center", alignItems: "center", display: "flex", borderRadius: "8px" }}>
    <p style={{ fontSize: "16px", fontWeight: "500", color: "#D23C3C", padding: "15px", backgroundColor: "#FED9D5", justifyContent: "center", alignContent: "center", alignItems: "center", borderRadius: "8px", display: "flex", textAlign: "center" }}>How about having dinner with me?</p>
  </div>
  <div style={{ marginLeft: "10px" }}>
    <span style={{ color:'#D23C3C' }}><TbReload size={30}/></span>
  </div>
</div>






          <div className="d-flex justify-content-between align-items-center">
            <p style={{ fontSize: "12px", fontWeight: "600", color: "#D23C3C" }}>
              <span style={{ color: "#FFB800", verticalAlign: "middle" }}>
                <FaCrown size={18} style={{alignItems:"center", justifyContent:"center"}} />
              </span> You have 3 rights left to ask questions.
               <span style={{ color: "#FFB800" }}>
                Upgrade your account to premium for unlimited access.
              </span>
            </p>
     
            <button style={{ width: "123px", height: "48px" }} className="mb-3" id='quizGameBTN'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionGameCard
