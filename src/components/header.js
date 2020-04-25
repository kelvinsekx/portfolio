import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Toggle from './toggle'

const Header = (props) => (
  <header
    style={{
      marginBottom: `0.25rem`,
      border: `0.6px solid #888`,
      display:`flex`,
      alignItems:`center`,
      justifyContent: `space-between`
    }}
  >
    <div>
      <h1 style={{
        fontSize:`1.5rem`,
         }}>
        <Link
          to="/"
          style={{
            color: `rgb(232, 235, 53)`,
            textDecoration: `none`,
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <Toggle theme={props.theme} toggleTheme={props.toggleTheme}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
