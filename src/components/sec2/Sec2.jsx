import React from 'react';
import './sec2.css';

const Sec2 = () => {
  return (
    <div>
      <div class="section2">
          <div class="section2-overlay">
          </div>
          <div class="section2-content">
              <h1 style={{color:"#FF723E", fontWeight: "600", fontSize:"63px", textAlign: "left", margin:"10px 0px", lineHeight: 1}}>THE FUTURE IS HERE <br/> EXPLORE RENEGADES CITY</h1>
              <p style={{fontSize: "larger", textAlign: "left", color: "white", padding: "0 300px 0 0"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
              <div class="button-set">
                  <a class="a-button" href="">
                      <div class="special-button">
                          <p style={{color:"black",fontWeight: "500"}}>VIEW PHOTO GALLERY</p>
                      </div>
                  </a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Sec2