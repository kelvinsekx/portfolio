import React from "react"
import { Link } from "gatsby"
import { Apple } from "lucide-react"

import "../styles/index.css"

import { colors } from "../components/utils"
import { randColor } from "../components/utils/hooks"

import { LandMarkLayout } from "./../components/layout/LandMarkLayout"
import { AboutKelvinsekx } from "../components/AboutMe"
import { ProfileHeader } from "../components/ProfileHeader"
import { ListRecentArticles } from "../components/ListRecentArticles"

const HomePage = () => {
  return (
    <LandMarkLayout>
      <div
        className={
          "w-full px-3 md:px-1 md:w-4/6 mx-auto text-[#232b2b] py-5 md:py-10"
        }
      >
        <ProfileHeader />
        <AboutKelvinsekx />
        <HomePage.Footer />
        <ListRecentArticles />
      </div>
    </LandMarkLayout>
  )
}

export default HomePage

HomePage.Footer = () => {
  const r = randColor()
  return (
    <p className="mt-10 font-medium hover:underline text-gray-600 cursor-pointer">
      <span>
        <Link to="/cover-letter">
          Thinking of working with me? Read more about my background here
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
  )
}
