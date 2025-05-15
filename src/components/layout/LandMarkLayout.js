import React from "react"

export const LandMarkLayout = ({ children }) => {
  return (
    <div>
      {children}
      <footer>
        <p className="text-gray-500 px-2">
          This website is built by me together with React, GraphQL, Gatsby build
          & Vercel
        </p>
      </footer>
    </div>
  )
}
