import React from "react"

export default ({ data, description }) => (
  <div style={{fontSize:'2rem', 
  textShadow: '5px 4px 6px black, 0 0 1em blue, 0 0 0.7em blue'}}>
    <h1>{data}</h1>
    <div>
      <p>{description}</p>
    </div>
  </div>
)
