import React from "react"

import {HeadContainer} from "./headercom.styled"
import HeaderSummary from "../headerSum/index"
import ImageContainer from "../imageContainer/index"
import InterestBtn from "../interestBtn/interestBtn"

export default function headerContainer() {
  return (
    <>
      <HeadContainer>
        <HeaderSummary />
        <ImageContainer />
      </HeadContainer>
      <InterestBtn />
    </>
  )
}
