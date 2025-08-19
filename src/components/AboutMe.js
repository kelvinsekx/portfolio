import * as React from "react"

import { colors } from "./utils"
import { randColor } from "./utils/hooks"
import clsx from "clsx"

import { CV } from "./CV/cv"
import { Socials } from "./Socials"
import CollapsibleSection from "./CollapsibleSection"
import { useTheme } from "styled-components"

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
      <h2 className="agbalumo-font mt-4 relative tracking-wide text-2xl lg:text-3xl pt-2">
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
  const { theme } = useTheme()
  const btnLabels = ["mission", "short", "long", "resume"]

  const styles = {
    dark: "bg-white !text-black rounded-[inherit]",
    light: "bg-gray-300",
  }

  const s = styles[theme]
  const buttons = btnLabels.map((each, index) => (
    <div key={each} className="flex">
      <button
        className={clsx("px-2 py-1", {
          ["font-semibold " + s]: show === each,
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
    <div className="flex rounded-l-md rounded-r-md border border-gray-600 w-fit overflow-clip">
      {buttons}
    </div>
  )
}

export function Mission() {
  return (
    <div className="space-y-3">
      <p>
        I believe strongly in the future of Africa, and that we can indeed shape
        it for us and many outside it. My goal is to polarize genuine knowledge
        for all sides by building products that foster this.
      </p>
      <p>
        We can not trust the future that is given to us. We have to see them now
        and extend them by ourselves.
      </p>
    </div>
  )
}

export function Short() {
  return (
    <div className="space-y-3">
      <p>
        For the past past five years, I've focused on helping businesses thrive
        by building and scaling high-performing teams, communities, robust
        mobile and web applications.
      </p>
      <p>
        I orbit around engineering, product strategies or passionate commentary
        on Nigeria. You can find my less serious thoughts and banter over on X
        (formerly Twitter).
      </p>
      <p>
        I enjoy the rythm of good music and the occasional creative escape with
        oil and acrylic paints.
      </p>
    </div>
  )
}

export function Long() {
  return (
    <div className="space-y-3">
      <p>
        I am a Nigerian software engineer, product manager, economist and yabber
        who is popular with the alias Kelvinsekx. I co-founded Ibadan Techies
        Club, a community that organized dozens of tech meetups in Ibadan.
        Presently, I help ambitious company build softwares and teams.
      </p>
      <CollapsibleSection reverse header={"Early life"}>
        <p>
          Born in Delta State, Nigeria, I moved to Ibadan at age three and have
          lived there since. I am the first of three siblings. My secondary
          education was at Rochas Foundation College, NTC Road, Ibadan, followed
          by my tertiary studies at the University of Ibadan.
        </p>
        <p>
          While stories from my childhood suggest I was a talented dancer, this
          particular skill faded as I matured. However, new strengths emerged;
          throughout secondary school, I was known for my exceptional abilities
          with numbers. This innate quantitative aptitude may well have been the
          seed for my later passion for computer science. Before fully immersing
          myself in programming in 2020, I explored my artistic side,
          particularly through drawing and painting, demonstrating an early
          appreciation for both analytical and creative disciplines.
        </p>
      </CollapsibleSection>
      <CollapsibleSection reverse header={"Career"}>
        <p>
          Over the past 5 years, I have gained valuable experiences from working
          with{" "}
          <UnderlinedLink href={"https://www.liinae.com"}>
            Liinae
          </UnderlinedLink>
          ,{" "}
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
          after, in my final year, during an Academic Staff Union of
          Universities (ASUU) strike. That unexpected free time became an
          opportunity to dive into HTML, CSS, and PHP.
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
          holds the key to the future of economics and its practical
          applications.
        </p>
      </CollapsibleSection>
      <CollapsibleSection reverse header={"Byee"}>
        <p>
          So, there you have it, a deeper look into my background. Those who
          know me well can attest: I'm quite jovial, and there's rarely a dull
          moment around me!
        </p>
        <p>
          Here's a little something for your time 🤣:{" "}
          <span className="font-medium">
            Did you know that tall children are not taller than their parents?
            Well, if you didn't, now you do! If you still find that hard to
            believe, you'd have to be taller than the tallest tree in your
            hometown
          </span>
          . lol
        </p>
      </CollapsibleSection>
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
