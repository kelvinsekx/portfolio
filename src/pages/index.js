import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Short from "../components/short"
import Mission from "../components/mission"
import Long from "../components/long"

//Components that makes up the page
import HeaderContainer from "../components/maincomponent/headerContainer"
import BanWrapper from "../components/banWrapper"

import "../indexstyles.scss"

function IndexPage() {
  const [show, setShow] = useState("short")

  const showIf = () => {
    if (show === "short") {
      return <Short />
    } else if (show === "mission") {
      return <Mission />
    } else if (show === "long") {
      return <Long />
    }
  }

  const buttons = ["mission", "short",  "long"].map(
    each  => (
    <button
      className={show === each ? "changeCurrentColor" : "fltBtn"}
      onClick={() => setShow(each)}
    >
      {each}
    </button>
  ))

  return (
    <Layout>
      <SEO title="Home" />
      <div id="overallWrapper">
        <HeaderContainer />
        <div className="instantPage-loader">
          <div className="floatingBtn">
            {buttons}
          </div>
          <BanWrapper>{showIf()}</BanWrapper>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
