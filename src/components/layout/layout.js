import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

//:::styled-components things:::
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "../useDarkMode"
import { lightTheme, darkTheme } from "../theme"
import { GlobalStyles } from "../global"
import { StyledLogo } from "../articles.styled"
import setFlickerAnimation from "../flickering"
//:::component parts:::
import Header from "../header/header"
import Footer from "../footer/footer"

import "./layout.css"
//)):::::::i m p o r t a t i o n   e n d s   h e r e

//::::::^^^^^^^^^^^^^^+++++++++++++++^^^^^^^^^^^^^^^::::::
//G O   A N D   B U I L D   G R E A T   T H I N G S

const Layout = ({ children, home }) => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  const color = {
    name: "mediumseagreen",
  }

  useEffect(() => {
    setFlickerAnimation()
    return () => {
      ""
    }
  }, [])

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledLogo color={color} className="el_flicker" theme={theme}>
              kelvinsekx
            </StyledLogo>
          </Link>
        </Header>
        <div className="w-full px-4 md:px-1 md:w-4/6 mx-auto text-[#232b2b] py-10">
          <main>{children}</main>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
