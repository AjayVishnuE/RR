import React from 'react'
import './navbar.css';

import { default as Desktoplogo } from "../../assets/Renegades logo main.svg";
import { default as Mobilelogo } from "../../assets/Renegades logo mobile.svg";

const Navbar = () => {
  return (
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            <a href="./index.html">
              <img class="nav-logo-desktop" src={Desktoplogo}/>
              <img class="nav-logo-mobileview" src={Mobilelogo}/>
            </a>
          </div>
        </div>
        <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div class="nav-links">
              <a href="">ABOUT GAME</a>
              <a href="">WEB 3</a>
              <a href="">GAME TESTING</a>
              <a href="">CONTACT</a>
          </div>
    </div>
  )
}

export default Navbar