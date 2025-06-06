import React from "react"

export default function Footer() {
  return (
    <footer className="text-gray-500 mt-20 flex flex-col text-sm">
      <hr />
      <div className="py-10 self-center text-center">
        <aside>&copy; 2020 kelvinsekx. All rights reserved</aside>
        <aside>
          <div>
            Made with all the christ love and agape
            <span className="text-[rgb(232,58,255)]">&#10084;</span>
            there is in the world.
          </div>
        </aside>
      </div>

      <p className="self-center px-2 text-center w-9/12 text-balance py-1 mt-5 flex justify-center items-center">
        This website is built by myself together with React, GraphQL, Gatsby
        build & Vercel. Cascaded with TailwindCSS & Styled Components.
      </p>
    </footer>
  )
}
