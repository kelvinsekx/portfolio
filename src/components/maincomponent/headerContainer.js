import React from "react"
import HeaderSummary from "../headerSum/index"
import ImageContainer from "../imageContainer/index"
import FloatingIcon from "../interestBtn"

export default function headerContainer() {
  return (
    <>
      <div className="header_container">
        <HeaderSummary />
        <ImageContainer />
      </div>
      <FloatingIcon />
    </>
  )
}
