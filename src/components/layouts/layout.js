import React, { useEffect } from "react"
import PropTypes from "prop-types"

//:::styled-components things:::
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "../useDarkMode"
import { lightTheme, darkTheme } from "../theme"
import { GlobalStyles } from "../global"
import setFlickerAnimation from "../flickering"

import "./layout.css"
//)):::::::i m p o r t a t i o n   e n d s   h e r e

//::::::^^^^^^^^^^^^^^+++++++++++++++^^^^^^^^^^^^^^^::::::
//G O   A N D   B U I L D   G R E A T   T H I N G S

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  useEffect(() => {
    setFlickerAnimation()
    return () => {
      ""
    }
  }, [])

  return (
    <ThemeProvider theme={{ styles: themeMode, theme, toggleTheme }}>
      <div>
        <GlobalStyles />
        <div>{children}</div>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
