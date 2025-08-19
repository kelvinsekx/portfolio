import React from "react"
import { Link } from "gatsby"
import { Apple } from "lucide-react"
import { LandMarkLayout } from "../components/layouts/land-mark-layout"
import { ListRecentArticles } from "../components/ListRecentArticles"
import { ProfileHeader } from "../components/ProfileHeader"
import { AboutKelvinsekx } from "../components/AboutMe"

import { colors } from "../components/utils"
import { randColor } from "../components/utils/hooks"

const HomePage = () => {
  return (
    <LandMarkLayout>
      <div className={"w-full px-3 md:px-1 md:w-4/6 mx-auto py-5 md:py-10"}>
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
    <p className="mt-10 font-medium text-gray-600 cursor-pointer [&>span]:underline [&>span]:hover:text-black">
      <b>Thinking of working with me?</b> See{" "}
      <span>
        <Link to="/cover-letter">cover letter</Link>
      </span>
      {", "}
      <span>
        <Link to="/works">works</Link>
      </span>
      {", "}
      <span>
        <Link to="/articles">writing</Link>
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
