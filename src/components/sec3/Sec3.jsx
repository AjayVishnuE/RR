import React from 'react'
import './sec3.css';
import {default as Discord } from "../../assets/Discord-logo.svg";
import {default as Twitter } from "../../assets/Twitter-logo.svg";
import {default as Telegram } from "../../assets/Telegram-logo.svg";
import {default as Youtube } from "../../assets/Youtube-logo.svg";


const Sec3 = () => {
  return (
    <div>
      <div class="section3">
        <div class="section3-overlay">
          </div>
          <div class="section3-content">
              <h1 style={{color:"#FF723E", fontWeight: "600", fontSize:63, textAlign: "left", margin:"20px 0px", lineHeight: 1, width:"70%"}}>JOIN OUR FAST GROWING COMMUNITY TODAY</h1>
              <div class="section3-set">
                  <div class="section3-1-in-4">
                      <h1 style={{color:"white", fontSize: "x-large", fontWeight:"400", margin:0, lineHeight: 1}}>DISCORD MEMBERS</h1>
                      <div class="section3-imgset">
                          <img class="section3-img" src={Discord} alt="" />
                          <h1 style={{color:"#FF723E", fontSize:45, fontWeight: "500", margin:0, lineHeight: 1}}>39,957</h1>
                      </div>
                      <a class="section3-a-button" href="">
                          <div class="white-button">
                              <h1 style={{fontSize: "medium", fontWeight: "500"}}>JOIN DISCORD</h1>
                          </div>
                      </a>
                  </div>
                  <div class="section3-1-in-4">
                      <h1 style={{color:"white", fontSize: "x-large", fontWeight:"400", margin:0, lineHeight: 1}}>TWITTER FOLLOWERS</h1>
                      <div class="section3-imgset">
                          <img src={Twitter} alt="" />
                          <h1 style={{color:"#FF723E", fontSize:45, fontWeight: "500", margin:0, lineHeight: 1}}>43,600</h1>
                      </div>
                      <a class="section3-a-button" href="">
                          <div class="white-button">
                              <h1 style={{fontSize: "medium", fontWeight: "500"}}>FOLLOW IN TWITTER</h1>
                          </div>
                      </a>
                  </div>
                  <div class="section3-1-in-4">
                      <h1 style={{color:"white", fontSize: "x-large", fontWeight:"400", margin:0, lineHeight: 1}}>TELEGRAM MEMBERS</h1>
                      <div class="section3-imgset">
                          <img src={Telegram} alt="" />
                          <h1 style={{color:"#FF723E", fontSize:45, fontWeight: "500", margin:0, lineHeight: 1}}>45,760</h1>
                      </div>
                      <a class="section3-a-button" href="">
                          <div class="white-button">
                              <h1 style={{fontSize: "medium", fontWeight: "500"}}>JOIN TELEGRAM</h1>
                          </div>
                      </a>
                  </div>
                  <div class="section3-1-in-4">
                      <h1 style={{color:"white", fontSize: "x-large", fontWeight:"400", margin:0, lineHeight: 1}}>YOUTUBE SUBSCRIBERS</h1>
                      <div class="section3-imgset">
                          <img src={Youtube} alt="" />
                          <h1 style={{color:"#FF723E", fontSize:45, fontWeight: "500", margin:0, lineHeight: 1}}>10,888</h1>
                      </div>
                      <a class="section3-a-button" href="">
                          <div class="white-button">
                              <h1 style={{fontSize: "medium", fontWeight: "500"}}>SUBSCRIBE TO YOUTUBE</h1>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Sec3