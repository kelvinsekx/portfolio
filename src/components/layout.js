import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

//:::styled-components things:::
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"
//:::component parts:::
import Header from "./header"

import "./layout.css"
//)):::::::i m p o r t a t i o n   e n d s   h e r e

 
//::::::^^^^^^^^^^^^^^+++++++++++++++^^^^^^^^^^^^^^^::::::
//G O   A N D   B U I L D   G R E A T   T H I N G S

const Layout = ({ children, home}) => {
    //:::deconstruction stays below:::
    ///const { children, home} = props
    // console.log(props)
    //::::deconstruction ends::::
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const renderHeader = ()=>{
    if (home) {
      return (
        <div>
          <span
            style={{
              fontSize: `1.8rem`,
            }}
          >
            <Link
              to="/"
              style={{
                color: `rgb(111, 23, 122)`,
                textDecoration: `none`,
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </span>
        </div>
      )
    } else if(!(home)) {
      return (
      <div>
        <span
          style={{
            fontSize: `1.2rem`,
          }}
        >
          <Link
            to="/"
            style={{
              color: `rgb(255, 167, 196)`,
              textDecoration: `none`,
            }}
          >
            {data.site.siteMetadata.title}
          </Link>
        </span>
      </div>
      )
    }
  }
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
        >
          {renderHeader()}
         
        </Header>
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>

          <footer>
            <aside>
              Kelvinsekx.codes is built, maintained and written by Ukuejubola
              Kelvin together with all the agape <span id="love">&#10084;</span>{" "}
              there is in the world. <br /> Icons from{" "}
              <a
                className="link"
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                www.flaticon.com
              </a>
            </aside>
          </footer>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
