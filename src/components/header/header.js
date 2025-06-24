//::: t h i s  c o m p o n e n t   i s  e x p o r t e d   t o   l a y o u t. j s
import React from "react"
import Toggle from "../toggle/toggle"
import { Head } from "./header.styled"

const Header = function (props) {
  const { theme, toggleTheme, plain, children } = props
  return (
    <Head theme={theme} plain={!!plain}>
      {plain ? <div /> : children}
      <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Head>
  )
}

export default Header
