import * as React from "react"
import * as styles from "./styles.module.css"

import { colors } from "../utils"
import { randColor } from "../utils/hooks"
import clsx from "clsx"

import { CV } from "../CV/cv"
import { Socials } from "../Socials"

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
        <div className="w-11/12 md:w-5/6">{showIf()}</div>
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
      My mission is to learn, share and use technologies to solve my people's
      problem. Building clean, reusable, fun and decomposable web along the way
      - Yes, I cherish the small things on the web.
    </p>
  )
}

export function Short() {
  const r = randColor()

  return (
    <div className="space-y-3">
      <p>Hi there!</p>
      <p>
        My name is Kelvin. But I am more popular as Kelvinsekx. I do product and
        engineering management at{" "}
        <a
          style={{ color: colors[r], fontWeight: 500 }}
          href="https://www.liinae.com"
        >
          Liinae
        </a>
        . If I am not talking engineering, product or ranting about Nigeria, I
        am bantering and throwing some unserious takes on the internet.
      </p>
      <p>
        Putting work aside, I enjoy listening to good music and playing with oil
        and acrylic paints (that I do seldomly now). Half the time if you see
        me, I am trekking in my usual homeless style.
      </p>
    </div>
  )
}

export function Long() {
  const r = randColor()
  return (
    <div className="space-y-3">
      <p>
        Well, Thanks for wanting to read the details. My government name is
        Ukuejubola Kelvin Oritsetimeyin. I am from Delta State, Nigeria. I am an
        educator, developer and economist. A graduate of Economics and Education
        (B.sc[Ed]) from the{" "}
        <a
          style={{ color: colors[r], fontWeight: 500 }}
          href="https://www.ui.edu.ng"
        >
          University of Ibadan
        </a>
        .
      </p>
      <p>
        In my 5 years of experience, I have worked full-time for{" "}
        <UnderlinedLink href={"https://www.liinae.com"}>Liinae</UnderlinedLink>,{" "}
        <UnderlinedLink href={"https://www.sproutly.africa"}>
          Sproutly
        </UnderlinedLink>
        , OlaOla Poundo Yam, Concrete Communication, and Wigxel Corp. I am
        passionate about Opensauced. I have helped improve a handful of them
        like Opensauced and LangCorrect.
      </p>
      <p>
        Before coding, I was into Oil and Acrylic painting in my early undergrad
        days (2014-2016). Then got into programming in my final years during the
        ASSU strike (but this strike was internal than general). I would use my
        free time during this strike to learn HTML, CSS, and PHP. The rest is
        more or less an history. In summary, I am a self taught engineer.
      </p>
      <p>
        After some time learning PHP, I got introduced into javascript by Tayo.
        I fell in love with the animations that comes with it. I got so hocked
        and started my journey to mastering the language.
      </p>
      <p>
        Because of my love for econometrics, I spend few time to learn python,
        how python could be used in data Science and econometrics. To me,
        econometrics is the future of economics and looking from the
        programmatic side of it, it will be fun.
      </p>
      <p>
        You've just learnt so much about the background, on a lighter note I can
        be very jovial and no dull moment with me.
      </p>
      <p>
        If you got here, thanks for reading so far and you deserve to laugh 🤣.
        TAKE THIS JOKE:{" "}
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
