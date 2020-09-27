import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

//:::styled-components things:::
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"
import { StyledLogo} from "./articles.styled"
import setFlickerAnimation from "./flickering"
//:::component parts:::
import Header from "./header"

import "./layout.css"
//)):::::::i m p o r t a t i o n   e n d s   h e r e

 
//::::::^^^^^^^^^^^^^^+++++++++++++++^^^^^^^^^^^^^^^::::::
//G O   A N D   B U I L D   G R E A T   T H I N G S

const Layout = ({ children, home}) => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  const color = {
    name: "mediumseagreen"
  };
  setFlickerAnimation()
  
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
        >
          <Link to="/"
           style={{textDecoration: 'none'}}
          >
          <StyledLogo
            color={color}
            className="el_flicker"
            theme={theme}
          >kelvinsekx</StyledLogo>
         </Link>
        </Header>
        <div className="container-fluid" style={{marginTop: '4.2rem'}}>
          <main>{children}</main>
          <div className="container" style={{ paddingTop: '3rem'}}>
            <hr />
          <footer className="row">
            <aside>&copy; 2020 kelvinsekx. All rights reserved</aside>
            <aside id="asideFlex">
              <div>Made with all the agape</div> 
              <div className="lovecontainer"><span id="love">&#10084;</span></div>
              <div>there is in the world.</div>
            </aside>
          </footer>
          <hr />
          <div>Kelvinsekx.codes is built, maintained and written by Ukuejubola Kelvin</div>
          <div>Icons from{" "}
              <a
                className="link"
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                www.flaticon.com
              </a></div>
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
