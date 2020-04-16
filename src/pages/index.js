import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Components that makes up the page
import HeaderSummary from "../components/headerSum"
import ImageContainer from "../components/imageContainer"
import FloatingIcon from "../components/interestBtn"
import FloatingBtn from "../components/floatingBtn"
//imports styled component
import "../indexstyles.scss"

function IndexPage() {
  //This handles short
  const [showShort, setShowShort] = useState(true)
  //this handles mission
  const [showMission, setShowMission] = useState(false)
  //this handle long
  const [showLong, setShowLong] = useState(false)

  const changeMission=()=>{
    setShowMission(true)
    //set long statement to disappear
    setShowLong(false)
    //set short statement to disappear
    setShowShort(false)
  }
  const changeShort=()=> {
    setShowShort(true)
    //make long statement disappear
    setShowLong(false)
    //make mission statement disappear likewise
    setShowMission(false)
  }
  const changeLong=()=>{
    setShowLong(true)
    //make the short disappear
    setShowShort(false)
    //make the mission also disappear
    setShowMission(false)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div id="overallWrapper">
        <div className="container">
          <HeaderSummary />
          <ImageContainer />
        </div>
        <FloatingIcon />

        <div className="instantPage-loader">
          <div className="floatingBtn">
            <FloatingBtn
              class={showMission ? "changeCurrentColor" : "fltBtn"}
              name="my-mission"
              changeSomething={changeMission}
            />
            <FloatingBtn
              class={showShort ? "changeCurrentColor" : "fltBtn"}
              name="short"
              changeSomething={changeShort}
            />
            <FloatingBtn
              class={showLong ? "changeCurrentColor" : "fltBtn"}
              name="long"
              changeSomething={changeLong}
            />
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
                still don't believe, then you would have been taller than the
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
