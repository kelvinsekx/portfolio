import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled things
import { ThemeProvider } from "styled-components"
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header 
        siteTitle={data.site.siteMetadata.title} 
        toggleTheme={toggleTheme}
        theme={theme}
         />
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
              there is in the world. <br/> Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
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
