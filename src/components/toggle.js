//::: t h i s  c o m p o n e n t   i s  e x p o r t e d   t o  h e a d e r. j s
import React from "react"
import { func } from "prop-types"

import { ToggleContainer } from "./toggle.styled"
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import MoonIcon from "./icon/moon.svg"
import SunIcon from "./icon/sun.svg"

const Toggle = function({ theme, toggleTheme }) {
  const isLight = theme === "light"
  if (theme !== null) {
    return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme} role="presentation">
        <MoonIcon />
        <SunIcon />
      </ToggleContainer>
    )
  }else{
    return <span />
  }
}

Toggle.propTypes = {
  toggleTheme: func.isRequired,
}

export default Toggle
