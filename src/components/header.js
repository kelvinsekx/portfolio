//::: t h i s  c o m p o n e n t   i s  e x p o r t e d   t o   l a y o u t. j s
import PropTypes from "prop-types"
import React from "react"
import Toggle from "./toggle/toggle"

const Header = function(props) {
  const { theme, toggleTheme, children } = props
  return (
    <header
      style={{
        padding: `0.2rem 0.04rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-around`,
        backgroundColor: `#20232a`,
        position: `fixed`,
        zIndex: `1`,
        width: `100%`,
        top: `0`,
        left: `0`,
        border: '5px solid #00'
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
