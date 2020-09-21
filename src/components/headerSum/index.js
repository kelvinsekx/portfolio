import React from 'react'

// imported styles
import "./headersum.scss"

import {TypingP} from "../articles.styled.js"
import Typing from "../typing"

export default function headerSum() {
    return (
        <>
          <div className="detailsContainer">
            <h2 style={{margin: '1em 0'}}>Ukuejubola Kelvin</h2>
            <div className="details grey">
              Software Engineer
              <div style={{fontSize:'0.5em', margin: '0.1em 0', padding:'0'}}>JavaScript | Web experience | node | React | Amateur python</div>
             <TypingP>I like: <Typing /></TypingP>
            </div>
          </div>
        </>
    )
}
