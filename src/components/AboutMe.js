import * as React from "react"

import { colors } from "./utils"
import { randColor } from "./utils/hooks"
import clsx from "clsx"

import { CV } from "./CV/cv"
import { Socials } from "./Socials"

const { useState } = React

export const AboutKelvinsekx = () => {
  const [show, sShow] = useState("short")

  const setShow = (i) => sShow(i)

  const showIf = () => {
    if (show === "short") {
      return <Short />
    } else if (show === "mission") {
      return <Mission />
    } else if (show === "long") {
      return <Long />
    } else {
      return <CV />
    }
  }
  return (
    <div className="space-y-4">
      <h2 className="m-0 p-0 border-0 agbalumo-font mt-4 relative tracking-wide">
        About me <Socials />
      </h2>
      <div className="space-y-4">
        <FloatingWrapper show={show} setShow={setShow} />
        <div className="w-11/12 md:w-5/6 z-50">{showIf()}</div>
      </div>
    </div>
  )
}

const FloatingWrapper = ({ show, setShow }) => {
  const btnLabels = ["mission", "short", "long", "resume"]
  const buttons = btnLabels.map((each, index) => (
    <div key={each} className="flex">
      <button
        className={clsx("text-gray-600 px-2 py-1", {
          "!text-black !border-black font-medium": show === each,
        })}
        onClick={() => setShow(each)}
      >
        {each}
      </button>
      {!(index === btnLabels.length - 1) && (
        <div className="h-full w-[1.2px] bg-gray-600" />
      )}
    </div>
  ))
  return (
    <div className="flex rounded-l-md rounded-r-md border border-gray-600 w-fit">
      {buttons}
    </div>
  )
}

export function Mission() {
  return (
    <p>
      My mission is to continuously learn, share and use technology to solve my
      people's problem. Building clean, reusable, fun and decomposable web along
      the way. I have mastered achieving this via community, & open dialogue.
    </p>
  )
}

export function Short() {
  const r = randColor()

  return (
    <div className="space-y-3">
      <p>Hi there!</p>
      <p>
        It's great to meet you. I'm Kelvin, though many online know me as{" "}
        <b>Kelvinsekx</b>. For over five years, I've helped businesses thrive by
        building and scaling high-performing teams, communities, robust mobile
        and web applications. Right now, I do product and engineering management
        at{" "}
        <a
          style={{ color: colors[r], fontWeight: 500 }}
          href="https://www.liinae.com"
        >
          Liinae
        </a>
        .
      </p>
      <p>
        Beyond the realm of code, my conversations often orbit around
        engineering, product strategies or passionate commentary on Nigeria. You
        can find my less serious thoughts and banter over on X (formerly
        Twitter).
      </p>
      <p>
        I enjoy the rythm of good music and the occasional creative escape with
        oil and acrylic paints. And if you spot someone strolling by in a too
        comfortable, shall we say, "homeless style," there's a good chance it's
        me enjoying a walk.
      </p>
    </div>
  )
}

export function Long() {
  const r = randColor()
  return (
    <div className="space-y-3">
      <p>Thanks for taking the time to learn more about me!</p>
      <p>
        My government name is Ukuejubola Kelvin Oritsetimeyin. And while I
        proudly hail from Delta State, Nigeria, Ibadan has been home for most of
        my life. I wear a few hats: developer, product manager, and economist.
        My academic foundation is in Economics and Education (B.sc[Ed]) from the{" "}
        <a
          style={{ color: colors[r], fontWeight: 500 }}
          href="https://www.ui.edu.ng"
        >
          University of Ibadan
        </a>
        .
      </p>
      <p>
        Over the past 5 years and counting, I have gained valuable experiences
        from working with{" "}
        <UnderlinedLink href={"https://www.liinae.com"}>Liinae</UnderlinedLink>,{" "}
        <UnderlinedLink href={"https://www.sproutly.africa"}>
          Sproutly
        </UnderlinedLink>
        , Wigxel Corp, Concrete Communication & OlaOla Poundo Yam. These are
        excluding dozens of short-lived projects. I am a strong advocate for
        open source. I have helped improve a handful of them like
        opensauced.pizza and langcorrect.com.
      </p>
      <p>
        My creative sides emerged in my early undergrads years (2014-2016)
        through oil and acrylic painting. My programming journey began just
        after, in my final year, during an Academic Staff Union of Universities
        (ASUU) strike. That unexpected free time became an opportunity to dive
        into HTML, CSS, and PHP.
      </p>
      <p>
        A pivotal moment came when{" "}
        <a
          href="https://www.linkedin.com/in/oluwatayo-adegboye"
          className="underline"
        >
          Oluwatayo
        </a>{" "}
        introduced me to javascript . The dynamic animations instantly
        captivated me, and as they say, the rest is history!
      </p>
      <p>
        My fascination with econometrics has also led me to explore Python and
        its potential to enhance the field. I genuinely believe econometrics
        holds the key to the future of economics and its practical applications.
      </p>
      <p>
        So, there you have it, a deeper look into my background. Those who know
        me well can attest: I'm quite jovial, and there's rarely a dull moment
        around me!
      </p>
      <p>
        Here's a little something for your time 🤣:{" "}
        <span className="text-black font-medium">
          Did you know that tall children are not taller than their parents?
          Well, if you didn't, now you do! If you still find that hard to
          believe, you'd have to be taller than the tallest tree in your
          hometown
        </span>
        . lol
      </p>
    </div>
  )
}

function UnderlinedLink({ href = "/", children }) {
  return (
    <a href={href} className="underline">
      {children}
    </a>
  )
}
