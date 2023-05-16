import React from 'react'
import './sec4.css';

const Sec4 = () => {
  return (
    <div>
            <div class="section4">
                <div class="section4-overlay">
                </div>
                <div class="section4-content">
                    <h1 style={{color:"#FF723E", fontWeight: "600", fontSize:63, textAlign: "left", margin:"10px 0px", lineHeight: 1}}>The standard Lorem Ipsum<br/>passage from 1500</h1>
                    <p style={{fontSize: "larger", textAlign: "left", color: "white", padding: "0 300px 0 0"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                    <div class="button-set">
                        <a class="a-button" href="">
                            <div class="special-button">
                                <p style={{color:"black", fontWeight: "500"}}>VIEW PHOTO GALLERY</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Sec4