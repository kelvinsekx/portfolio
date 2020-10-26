import React, { useState } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Short from "../components/short"
import Mission from "../components/mission"
import Long from "../components/long"

import HeaderContainer from "../components/maincomponent/headerContainer"
import BanWrapper from "../components/banWrapper"
import FloatingWrapper from "../components/floatingWrapper/floatingwrapper"

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

  return (
    <Layout>
      <SEO title="Home" />
      <div id="overallWrapper">
        <HeaderContainer />
        <div className="instantPage-loader">
          <FloatingWrapper show={show} setShow={setShow} />
          <BanWrapper>{showIf()}</BanWrapper>
        </div>
      </div>
    </Layout>
  )
}


export default IndexPage
