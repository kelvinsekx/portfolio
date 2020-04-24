import React from "react"
import  Twitter  from "./icon/twitter.svg"
import  Gmail  from "./icon/gmail.svg"
import  Cater  from "./icon/cat.svg"
import  Linkedin  from "./icon/linkedin.svg"
import { SVG } from "./toggle.styled"

export default function interestBtn() {
  let color = "red"
  let borderBottom = `1px solid red`
  return (
    <>
      <div className="floatingInterests">
        <a
          href="https://www.twitter.com/utdkelvin"
          style={{
            color: color,
            borderBottom: borderBottom,
          }}
        >
          <SVG><Twitter /></SVG>
        </a>

        <a
          href="/articles"
          style={{
            borderBottom: `1px solid purple`,
          }}
        >
          Articles
        </a>
        <a
          href="https://www.github.com/kelvinsekx"
          style={{
            borderBottom: `1px solid purple`,
          }}
        >
          <SVG><Cater /></SVG>
        </a>
        <a
          href="https://www.linkedin.com/in/kelvin-ukuejubola-oritsetimeyin-b38858174"
          style={{
            borderBottom: `1px solid green`,
          }}
        >
          <SVG><Linkedin /></SVG>
        </a>
        <a
          href="https://kelvinsekx@gmail.com/"
          style={{
            borderBottom: `1px solid green`,
          }}
        >
          <SVG><Gmail /></SVG>
        </a>
        <a
          href="https://www.kelvinsekx.codes/"
          style={{ color: `green`, borderBottom: `1px solid green` }}
        >
          interviews and speakers
        </a>
      </div>
    </>
  )
}
