import React from "react"

export default ({ data, description }) => (
  <div style={{fontSize:'2rem', 
  textShadow: '3px 2px 3px black, 0 0 1em blue, 0 0 0.3em blue'}}>
    <h1>{data}</h1>
    <div>
      <p>{description}</p>
    </div>
  </div>
)
