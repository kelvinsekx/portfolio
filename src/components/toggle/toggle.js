//::: exported to header.js
import React from "react"
import { func } from "prop-types"

import { ToggleContainer } from "./toggle.styled"

import MoonIcon from "../icon/moon.svg"
import SunIcon from "../icon/sun.svg"

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light"
  return theme !== null ? (
    <ToggleContainer
      lightTheme={isLight}
      onClick={toggleTheme}
      role="presentation"
    >
      <MoonIcon />
      <SunIcon />
    </ToggleContainer>
  ) : (
    <span />
  )
}

Toggle.propTypes = {
  toggleTheme: func.isRequired,
}

export default Toggle
