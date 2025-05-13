// import HeaderSummary from "../headerSum/index"
// import ImageContainer from "../imageContainer/index"
// import InterestBtn from "../interestBtn/interestBtn"

import "./../headerSum/headersum.scss"
// import { TypingP, TypingDiv } from "../typing/typing.styled.js"
// import Typing from "../typing/typing"
import * as React from "react"
import * as styles from "./header.module.css"

import { colors } from "../utils"
import { randColor } from "../utils/hooks"

import img1 from "../../assets/kelvin-ugly.png"
import img2 from "../../assets/kelvinsmilling.png"
import img3 from "../../assets/yeye.png"

export default function headerContainer() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        <HeaderSummary />
        <ImageContainer />
      </div>
      <InterestBtn />
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
    <div className="md:text-left text-center">
      <h1 className="font-bold text-2xl lg:text-4xl">Ukuejubola Kelvin</h1>
      <div>
        <p className="font-medium text-gray-900  text-lg">
          Developer & product manager
        </p>
        <p className="tracking-tighter text-gray-400 text-sm">
          Normal normal, I am just a street boi
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

  console.log(i)
  React.useEffect(() => {
    const timeID = setInterval(() => {
      if (i == imgsrc.length - 1) {
        setImg(0)
      } else {
        console.log(i)
        setImg((prev) => prev + 1)
      }
    }, 4550)
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

const interests = [
  {
    link: "twitter",
    href: "https://www.twitter.com/kelvinsekx",
  },

  {
    link: "my writings",
    href: "/articles",
  },

  {
    link: "github",
    href: "https://www.github.com/kelvinsekx",
  },

  {
    link: "linkedin",
    href: "https://www.linkedin.com/in/kelvin-ukuejubola-oritsetimeyin-b38858174",
  },

  {
    link: "gmail",
    href: "mailto:kelvinsekx@gmail.com",
  },
]

const HeaderLink = (props) => {
  const r = randColor()
  return (
    <a
      className="border-b border-[colors[r]] text-[colors[r]] font-semibold text-lg lg:text-xl"
      href={props.href}
      style={{
        borderBottom: `3px solid ${colors[r]}`,
        color: `${colors[r]}`,
      }}
    >
      <div>{props.link}</div>
    </a>
  )
}

function InterestBtn() {
  return (
    <>
      <div className={styles.enquiryBtns}>
        {interests.map((each, i) => (
          <HeaderLink key={i} {...each} index={i} />
        ))}
      </div>
    </>
  )
}
