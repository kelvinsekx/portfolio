import React from "react"
import HeaderSummary from "../headerSum/index"
import ImageContainer from "../imageContainer/index"
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
