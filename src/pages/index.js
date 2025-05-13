import React from "react"
import "./index.css"

import { colors } from "../components/utils"
import { randColor } from "../components/utils/hooks"

import { AboutKelvinsekx } from "../components/AboutMe"
import HeaderContainer from "../components/HeaderContainer/header"
import { Apple } from "lucide-react"
import { Link } from "gatsby"

const HomePage = () => {
  const r = randColor()
  return (
    <div
      className={"w-full px-4 md:px-1 md:w-4/6 mx-auto text-[#232b2b] py-10"}
    >
      <HeaderContainer />
      <AboutKelvinsekx />
      <p className=" hover:underline text-gray-600 cursor-pointer">
        <span>
          <Link to="/cover-letter">
            Considering working with me? Read more about my background
          </Link>
        </span>{" "}
        <Apple
          fill
          className="inline size-8"
          style={{
            fill: `${colors[r]}`,
          }}
        />
      </p>
    </div>
  )
}

export default HomePage
