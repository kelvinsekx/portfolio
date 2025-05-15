// import HeaderSummary from "../headerSum/index"
// import ImageContainer from "../imageContainer/index"
// import InterestBtn from "../interestBtn/interestBtn"

import "./../headerSum/headersum.scss"
// import { TypingP, TypingDiv } from "../typing/typing.styled.js"
// import Typing from "../typing/typing"
import * as React from "react"
import * as styles from "./header.module.css"

import img1 from "../../assets/kelvin-ugly.png"
import img2 from "../../assets/kelvinsmilling.png"
import img3 from "../../assets/yeye.png"

export default function headerContainer() {
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
  // const [ready, setReady] = React.useState(false)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setReady(true)
  //   }, 1000)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <div className="text-left">
      <h1 className="font-medium text-4xl lg:text-5xl mb-0 agbalumo-font tracking-wider">
        Ukuejubola Kelvin
      </h1>
      <div className="tracking-tighter font-medium text-gray-500 text-sm mt-3 leading-5">
        <p>Developer. Product manager. Engineering Manager</p>
        <p>Entrepreneur. Founder, Ibadan Techies Club.</p>
        <p className="mt-1">Normal normal, I am just a street boi.</p>
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
      if (i == imgsrc.length - 1) {
        setImg(0)
      } else {
        setImg((prev) => prev + 1)
      }
    }, 7000)
    return () => clearInterval(timeID)
  }, [i])
  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img
            src={imgsrc[i]}
            alt="Kelvinsekx Ugly face"
            className="rounded-md w-full h-full object-cover object-center border border-gray-300"
          />
        </div>
      </div>
    </>
  )
}
