import React from 'react'
import './scrollbar.css';

import progressBar from "./imports";

const Scrollbar = () => {
  return (
    <div class="progress-container">
        <div id="progressbar" class="progress-bar"></div>
        <progressBar/>
    </div>
  )
}

export default Scrollbar