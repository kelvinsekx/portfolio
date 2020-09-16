import React from "react"
import Twitter from "./icon/twitter.svg"
import Gmail from "./icon/gmail.svg"
import Cater from "./icon/cat.svg"
import Linkedin from "./icon/linkedin.svg"
import Book from "./icon/book.svg"
import { SVG } from "./toggle.styled"

const interests = [
  {
    link: "twitter",
    href: "https://www.twitter.com/utdkelvin",
    color: "red",
    component: <Twitter />,
  },

  {
    link: "blog",
    href: "/articles",
    color: "purple",
    component: <Book />,
  },

  {
    link: "github",
    href: "https://www.github.com/kelvinsekx",
    color: "pink",
    component: <Cater />,
  },

  {
    link: "linkedin",
    href:
      "https://www.linkedin.com/in/kelvin-ukuejubola-oritsetimeyin-b38858174",
    color: "green",
    component: <Linkedin />,
  },

  {
    link: "gmail",
    href: "mailto:kelvinsekx@gmail.com",
    color: "blue",
    component: <Gmail />,
  },
]


const A = props => (
  <a
    className="floatingInt"
    href={props.href}
    style={{
      borderBottom: `5px solid ${props.color}`,
    }}
  >
    <SVG>{props.children}</SVG>
    <div style={{ fontSize: "0.8em" }}>{props.link}</div>
  </a>
)

const interestsButton = interests.map((each)=>(
                        <A link={each.link} href={each.href} color={each.color}>
                         {each.component}
                        </A>))

export default function interestBtn() {
  return (
    <>
      <div className="floatingInterests">
      {interestsButton}
      </div>
    </>
  )
}
