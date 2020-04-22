import React from "react"
//font awesomeness
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import {
  faEnvelopeOpenText,
  faNewspaper,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons"
library.add(fab, faCheckSquare, faCoffee)

export default function interestBtn() {
  let color = "red"
  let borderBottom = `1px solid red`
  return (
    <>
      <div className="floatingInterests">
        <a
          href="https://www.twitter.com/utdkelvin"
          style={{
            color: color,
            borderBottom: borderBottom,
            fontSize: `1.8rem`,
          }}
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>

        <a
          href="/articles"
          style={{
            color: `purple`,
            borderBottom: `1px solid purple`,
            fontSize: `1.8rem`,
          }}
        >
          <FontAwesomeIcon icon={faNewspaper} />
        </a>
        <a
          href="https://www.github.com/kelvinsekx"
          style={{
            color: "purple",
            borderBottom: `1px solid purple`,
            fontSize: `1.8rem`,
          }}
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/kelvin-ukuejubola-oritsetimeyin-b38858174"
          style={{
            color: `green`,
            borderBottom: `1px solid green`,
            fontSize: `1.8rem`,
          }}
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          href="https://kelvinsekx@gmail.com/"
          style={{
            color: `pink`,
            borderBottom: `1px solid pink`,
            fontSize: `1.8rem`,
          }}
        >
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </a>
        <a
          href="https://www.kelvinsekx.codes/"
          style={{
            color: `pink`,
            borderBottom: `1px solid pink`,
            fontSize: `1.8rem`,
          }}
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
        <a
          href="https://www.kelvinsekx.codes/"
          style={{ color: `green`, borderBottom: `1px solid green` }}
        >
          interviews and speakers
        </a>
      </div>
    </>
  )
}
