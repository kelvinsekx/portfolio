import React from "react"

import { colors } from "./utils"
import { randColor } from "./utils/hooks"

const socials = [
  {
    link: (
      <svg
        role="img"
        fill="white"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    href: "https://www.twitter.com/kelvinsekx",
  },

  {
    link: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="white"
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    href: "https://www.github.com/kelvinsekx",
  },

  {
    link: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-linkedin-icon lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/kelvin-ukuejubola-oritsetimeyin-b38858174",
  },

  {
    link: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Gmail</title>
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
    href: "mailto:kelvinsekx@gmail.com",
  },
]

const HeaderLink = (props) => {
  const r = randColor()
  return (
    <a
      className="p-2 w-fit flex justify-center items-center rounded-full bg-opacity-0 text-white"
      href={props.href}
      style={{
        backgroundColor: `${colors[r]}`,
      }}
    >
      <div className="z-20">{props.link}</div>
    </a>
  )
}

export function Socials() {
  return (
    <div className="absolute top-5 right-5">
      <div className="flex flex-col gap-1 items-center">
        {socials.map((each, i) => (
          <HeaderLink key={i} {...each} index={i} />
        ))}
      </div>
    </div>
  )
}
