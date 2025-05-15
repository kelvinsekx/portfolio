import React from "react"

export const LandMarkLayout = ({ children }) => {
  return (
    <div>
      {children}
      <footer>
        <p className="text-gray-500">
          This website is built with React, GraphQL and Gatsby build
        </p>
      </footer>
    </div>
  )
}
