import React from "react"

export const LandMarkLayout = ({ children }) => {
  return (
    <div>
      {children}
      <footer>
        <p className="text-gray-500 px-2 text-center w-9/12 text-balance py-1 mt-5">
          This website is built by myself together with React, GraphQL, Gatsby
          build & Vercel. Cascaded with TailwindCSS & Styled Components.
        </p>
      </footer>
    </div>
  )
}
