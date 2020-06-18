import React from 'react'

import {StyledTyping} from "./articles.styled"
 import Typing from "./typing"

export default function headerSum() {
    return (
        <>
          <div className="detailsContainer">
            <h2>Ukuejubola Kelvin</h2>
            <div className="details grey">
              Software Engineer
              <div style={{fontSize:'0.5em'}}>JavaScript | Web experience | node | React</div>
             <p>I like: <StyledTyping><Typing /></StyledTyping></p>
            </div>
          </div>  
        </>
    )
}
