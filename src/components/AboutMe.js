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
      <p> Well, Thanks for wanting to read the details.</p>
      <p>
        My government name is Ukuejubola Kelvin Oritsetimeyin. I hail from Delta
        State, Nigeria. But I have lived most part of my life in Ibadan. I am an
        developer, product manager and economist. A graduate of Economics and
        Education (B.sc[Ed]) from the{" "}
        <a
          style={{ color: colors[r], fontWeight: 500 }}
          href="https://www.ui.edu.ng"
        >
          University of Ibadan
        </a>
        .
      </p>
      <p>
        In my 5+ years of experience, I have worked full-time with{" "}
        <UnderlinedLink href={"https://www.liinae.com"}>Liinae</UnderlinedLink>,{" "}
        <UnderlinedLink href={"https://www.sproutly.africa"}>
          Sproutly
        </UnderlinedLink>
        , Wigxel Corp, Concrete Communication & OlaOla Poundo Yam. These are
        excluding dozens of short-lived gigs. I am passionate about open source.
        I have helped improve a handful of them like opensauced.pizza and
        langcorrect.com.
      </p>
      <p>
        Before my coding career, I was into oil and acrylic painting in my early
        undergrad days (2014-2016). I began my programming in final year during
        the ASSU strike (internal to UI). I would use my free time during this
        strike to learn HTML, CSS, and PHP.
      </p>
      <p>
        After some time learning PHP, I got introduced into javascript by{" "}
        <a href="https://www.linkedin.com/in/oluwatayo-adegboye">Oluwatayo</a>.
        I fell in love with the animations that comes with it. The rest they say
        is history.
      </p>
      <p>
        Because of my love for econometrics, I spend few time playing with
        python, and how it could be used to enhance econometrics. To me,
        econometrics is the future of economics and its application would mean
        so much for the field.
      </p>
      <p>
        You've just learnt a lot about my background. Let me show you a part of
        me only people who knows so much about me see, I'm very jovial and no
        dull moment.
      </p>
      <p>
        Here is your reward 🤣. TAKE THIS JOKE:{" "}
        <span className="text-black font-medium">
          Do you know that tall children are not taller than their parents?
          Well, if you don't know, now you know at least. If you still don't
          believe, then you would have been taller than the tallest tree in your
          home town
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
