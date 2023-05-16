import React from 'react'
import './sec1.css';

const Sec1 = () => {
  return (
    <div>
      <div class="section1">
          <div class="section1-overlay">
          </div>
          <div class="section1-content">
              <h1 style={{color:"#FF723E", fontWeight: "600", fontSize:"63px", textAlign: "left", margin:"10px 0px", lineHeight: 1}}>ENTER THE VAST OPEN-WORLD OF RENEGADES REPUBLIC</h1>
              <p style={{fontSize: "larger", textAlign: "left", color: "white", padding: "0 20px 0 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p>
              <div class="button-set">
                  <a class="a-button" href="">
                      <div class="special-button">
                          <p style={{color:"black",fontWeight: "500"}}>WATCH GAME TRAILER 4K</p>
                      </div>
                  </a>
                  <a class="a-button" href="">
                      <div class="special-button">
                          <p style={{color:"black",fontWeight: "500"}}>GAME TESTING SIGNUP</p>
                      </div>
                  </a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Sec1