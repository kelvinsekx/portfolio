import React from "react"

export default ({ data, description }) => (
  <div style={{fontSize:'2.5rem'}}>
    <h1>{data}</h1>
    <div>
      <p>{description}</p>
    </div>
  </div>
)
