import React from "react"

function BanWrapper({ children }) {
  return (
    <div
      style={{
        padding: `2rem 0.5em`,
        lineHeight: "20px",
      }}
    >
      {children}
    </div>
  )
}

export default BanWrapper
