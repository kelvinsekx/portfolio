// import HeaderSummary from "../headerSum/index"
// import ImageContainer from "../imageContainer/index"
// import InterestBtn from "../interestBtn/interestBtn"

// import { TypingP, TypingDiv } from "../typing/typing.styled.js"
// import Typing from "../typing/typing"
import * as React from "react"
import { useTheme } from "styled-components"

import img1 from "../assets/kelvin-ugly.png"
import img2 from "../assets/kelvinsmilling.png"
import img3 from "../assets/yeye.png"

import { StyledLogo } from "./../components/articles.styled"
import setFlickerAnimation from "./../components/flickering"

export function ProfileHeader() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end gap-6">
        <ImageContainer />
        <HeaderSummary />
      </div>
    </div>
  )
}

function HeaderSummary() {
  const { theme } = useTheme()

  const color = {
    dark: "white",
    light: "black",
  }

  React.useEffect(() => {
    setFlickerAnimation()
    return () => {
      ""
    }
  }, [])

  return (
    <div className="text-left">
      <h1 className="font-medium text-3xl lg:text-4xl mb-0 tracking-wider">
        <StyledLogo color={color} className="el_flicker" theme={theme}>
          Ukuejubola Kelvin
        </StyledLogo>
      </h1>
      <div className="tracking-tighter font-medium text-gray-500 text-sm mt-3 leading-5">
        <p>Software engineer. Product manager.</p>
        <p>Entrepreneur. Dwindling optimist in Nigeria.</p>
        <p className="mt-2 text-balance">
          Serving founders and solving their problems via product, engineering
          and people.
        </p>
      </div>
      {/* <div className="details grey">
        <TypingDiv>
          <TypingP>I like: {ready ? <Typing /> : <span />}</TypingP>
        </TypingDiv>
      </div> */}
    </div>
  )
}

const imgsrc = [img1, img2, img3]
function ImageContainer() {
  const [i, setImg] = React.useState(1)

  React.useEffect(() => {
    const timeID = setInterval(() => {
      if (i === imgsrc.length - 1) {
        setImg(0)
      } else {
        setImg((prev) => prev + 1)
      }
    }, 7000)
    return () => clearInterval(timeID)
  }, [i])
  return (
    <div className={"h-[22rem] w-[20rem]"}>
      <img
        src={imgsrc[i]}
        alt="Kelvinsekx Ugly face"
        className="rounded-md w-full h-full object-cover object-center border border-gray-300"
      />
    </div>
  )
}
