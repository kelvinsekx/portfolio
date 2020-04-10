import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//imports styled component
import "../indexstyles.scss"

function IndexPage() {
  let color = "red"
  let borderBottom = `1px solid ${color}`
  //This handles short
  const [showShort, setShowShort] = useState(true)
  //this handles mission
  const [showMission, setShowMission] = useState(false)
  //this handle long
  const [showLong, setShowLong] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <div id="overallWrapper">
        <div className="container">
          <div className="detailsContainer">
            <h2>Ukuejubola Kelvin</h2>
            <p className="details grey">
              Software Engineer and Web Expert inside Life
            </p>
          </div>
          <div className="img-container">
            <div
              className="img-wrapper"
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
            >
              <img src={`../../static/img.jpg`} alt="Kelvin Ukuejubola Images" />
            </div>
          </div>
        </div>

        <div className="floatingInterests">
          <a
            href="https://www.twitter.com/utdkelvin"
            style={{
              color: color,
              borderBottom: borderBottom,
            }}
          >
            twitter
          </a>
          <a
            href="https://www.kelvinsekx.codes/"
            style={{
              color: `purple`,
              borderBottom: `1px solid purple`,
            }}
          >
            articles
          </a>
          <a
            href="https://www.github.com/kelvinsekx"
            style={{
              color: "purple",
              borderBottom: `1px solid purple`,
            }}
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-ukuejubola-oritsetimeyin-b38858174"
            style={{ color: `green`, borderBottom: `1px solid green` }}
          >
            linkedin
          </a>
          <a
            href="https://kelvinsekx@gmail.com/"
            style={{ color: `pink`, borderBottom: `1px solid pink` }}
          >
            email
          </a>
          <a
            href="https://www.kelvinsekx.codes/"
            style={{ color: `pink`, borderBottom: `1px solid pink` }}
          >
            projects
          </a>
          <a
            href="https://www.kelvinsekx.codes/"
            style={{ color: `green`, borderBottom: `1px solid green` }}
          >
            interviews and speakers
          </a>
        </div>

        <div className="instantPage-loader">
          <div className="floatingBtn">
            <button
              className={showMission ? "changeCurrentColor" : "fltBtn"}
              onClick={() => {
                setShowMission(true)
                //set long statement to disappear
                setShowLong(false)
                //set short statement to disappear
                setShowShort(false)
              }}
            >
              MY-MISSION
            </button>
            <button
              className={showShort ? "changeCurrentColor" : "fltBtn"}
              onClick={() => {
                setShowShort(true)
                //make long statement disappear
                setShowLong(false)
                //make mission statement disappear likewise
                setShowMission(false)
              }}
            >
              SHORT
            </button>
            <button
              className={showLong ? "changeCurrentColor" : "fltBtn"}
              onClick={() => {
                setShowLong(true)
                //make the short disappear
                setShowShort(false)
                //make the mission also disappear
                setShowMission(false)
              }}
            >
              LONG
            </button>
          </div>
          <div
            id="short"
            className={`line-height24 ${showShort ? "current" : "none"}`}
          >
            <p>
              <span title="world in my native language">Araye</span>, Welcome
              here and thanks for visiting. Ukuejubola Kelvin Oritsetimeyin is
              an Educator, developer and Economist. And he is passionate about
              everything web. If he is not coding, he enjoys listening to good
              music and playing with oil and acrylic paints. Then one more
              thing, he is probably reading.
            </p>
          </div>
          <div
            id="mission"
            className={`line-height24 ${showMission ? "current" : "none"}`}
            style={{
              padding: `2rem`,
            }}
          >
            kelvinsekx mission is to build neat, small and decomposable web with
            as much default technologies(html, css and vanilla javaScript) as
            possible together with emerging and modern frameworks and
            technologies.
          </div>
          <div
            id="long"
            className={`line-height24 ${showLong ? "current" : "none"}`}
          >
            <p>
              {" "}
              Well, Thanks for wanting to read the details. Ukuejubola Kelvin
              Oritsetimeyin is an Educator, developer and Economist. He is a
              graduate of Economics and Education (B.sc[Ed]) from the
              prestigiuos{" "}
              <a href="https://www.ui.edu.ng">University of Ibadan</a>. He is a
              Nigerian and African. He takes pride in those.
            </p>
            <p>
              {" "}
              He was initially more into artistical painting in his early
              undergrads days. And got into programming in his final years
              during the usual ASSU strike(But this strike was internal). He
              used the free time he had during the strike to learn html, css,
              and PHP. And the rest is more or less an history. In short, He is
              self taught engineer.
            </p>
            <p>
              He got into coding with PHP and later learnt javaScript. Now he is
              in love with javaScript and preaces JS everywhere he could.
            </p>
            <p>
              Currently because of his love for econometrics (that he so much
              hated in his grad days), he spends few time to master python and R
              language and how they could be used in data Science and
              econometrics. To him,econometrics is the future of economics and
              it is so fun.
            </p>
            <p>
              It is noteworthy to say that he is the very jovial type and no
              dull moment with him.
            </p>
            <p>
              If you got here, thanks for reading so far and you deserve to
              laugh. TAKE THIS JOKE:{" "}
              <span className="joke">
                Do you know that tall children are not taller than their
                parents? Well, if you don't know, now you know at least. If you
                still don't believe, then you would have been taller then the
                tallest tree in your home town
              </span>
              . lol
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
