import React from "react"
import { useTheme } from "styled-components"
import Header from "../header/header"

export const LandMarkLayout = ({ children }) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} plain />
      {children}
      <footer>
        <p className="text-gray-500 px-2 text-center w-9/12 text-balance py-1 mt-5 flex justify-center items-center">
          This website is built by myself together with React, GraphQL, Gatsby
          build & Vercel. Cascaded with TailwindCSS & Styled Components.
        </p>
      </footer>
    </div>
  )
}
