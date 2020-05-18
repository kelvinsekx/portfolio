import React from "react"
import HeaderSummary from "../headerSum"
import ImageContainer from "../imageContainer"
import FloatingIcon from "../interestBtn"

export default function headerContainer() {
  return (
    <>
      <div className="container">
        <HeaderSummary />
        <ImageContainer />
      </div>
      <FloatingIcon />
    </>
  )
}
