import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

//:::styled-components things:::
import { StyledLogo } from "../articles.styled"
import setFlickerAnimation from "../flickering"
//:::component parts:::
import Header from "../header/header"
import Footer from "../footer"

import "./layout.css"
import { useTheme } from "styled-components"
//)):::::::i m p o r t a t i o n   e n d s   h e r e

//::::::^^^^^^^^^^^^^^+++++++++++++++^^^^^^^^^^^^^^^::::::
//G O   A N D   B U I L D   G R E A T   T H I N G S

const Layout = ({ children, variant = "blog" }) => {
  const { toggleTheme, theme } = useTheme()
  const color = {
    name: "mediumseagreen",
  }

  useEffect(() => {
    setFlickerAnimation()
    return () => {
      ""
    }
  }, [])

  const s = {
    plain: "",
    blog: "w-full px-4 md:px-1 md:w-4/6 mx-auto py-15",
  }

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} plain={false}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledLogo color={color} className="el_flicker" theme={theme}>
            kelvinsekx
          </StyledLogo>
        </Link>
      </Header>

      <div className={s[variant]}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
