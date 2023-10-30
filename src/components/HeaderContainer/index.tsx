// import HeaderSummary from "../headerSum/index"
// import ImageContainer from "../imageContainer/index"
// import InterestBtn from "../interestBtn/interestBtn"

// import "./headersum.scss"
// import { TypingP, TypingDiv } from "../typing/typing.styled.js"
// import Typing from "../typing/typing"
import * as React from "react"
import styles from "./header_container.module.css"

import { colors } from "../utils"

import { randColor } from "../utils/hooks"

export default function headerContainer() {
  return (
    <>
      <div className={styles.main}>
        <HeaderSummary />
        <ImageContainer />
      </div>
      <InterestBtn />
    </>
  )
}

class HeaderSummary extends React.Component {
  constructor(props: {}) {
    super(props)
    this.state = {
      ready: false,
    }
  }
  componentDidMount() {
    this.setState({ ready: true })
  }
  render() {
    return (
        <div style={{fontWeight: 500}}>
          <h1 className={`${styles.author}`}>
            Ukuejubola Kelvin
          </h1>
          <p className={styles.title}>Software Engineer</p>
          <div className="details grey">
            {/* <TypingDiv>
              <TypingP>
                I like: {this.state.ready ? <Typing /> : <span />}
              </TypingP>
            </TypingDiv> */}
          </div>
        </div>
    )
  }
}

const imgsrc = [
  "/src/assets/kelvin-ugly.png",
  "/src/assets/kelvinsmilling.png",
  "/src/assets/yeye.png",
]
function ImageContainer() {
  const [i, setImg] = React.useState(1);

  console.log(i)
  React.useEffect(()=> {
    const timeID = setInterval(()=> {
      if(i == (imgsrc.length - 1)){
        setImg(0)
      }else{
        console.log(i)
        setImg((prev)=> prev + 1)
      }

    }, 4550)
    return ()=>clearInterval(timeID)
  }, [i])
  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={imgsrc[i]} alt="Kelvinsekx Ugly face" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', border: 'inherit', borderRadius: 'inherit'}}/>
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
    link: "blog",
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
    href: "mailto:kelvinsekx@gmail.com"
  },
]

const HeaderLink = (props: (typeof interests)[0] & { index: number }) => {
  const r = randColor()
  return (
    <a
      className={styles.enquiryBtn}
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

const Interests = interests.map((each, i) => <HeaderLink key={i} {...each} index={i} />)
function InterestBtn() {
  return (
    <>
      <div className={styles.enquiryBtns}>{Interests}</div>
    </>
  )
}
