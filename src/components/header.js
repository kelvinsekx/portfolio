//::: t h i s  c o m p o n e n t   i s  e x p o r t e d   t o   l a y o u t. j s
import PropTypes from "prop-types"
import React from "react"
import Toggle from "./toggle"

const Header = function(props) {
  const { theme, toggleTheme, children } = props
  return (
    <header
      style={{
        padding: `1.25rem 0.24rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-around`,
      }}
    >
      {children}
      <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
