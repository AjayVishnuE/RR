import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            <a href="./index.html">
              <img class="nav-logo-desktop" src="./images/Renegades logo main.svg"/>
              <img class="nav-logo-mobileview" src="./images/Renegades logo mobile.svg"/>
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