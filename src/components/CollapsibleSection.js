import React from "react"
import clsx from "clsx"

export default function CollapsibleSection({ header, children, reverse }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <section className="space-y-3 my-6">
      <header
        className={clsx(
          "text-2xl tracking-tight leading-7 font-semibold cursor-pointer flex items-center gap-3 group",
          {
            "flex flex-row-reverse justify-end": !!reverse,
          }
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span> {header}</span>
        <span
          className={clsx(
            `text-gray-400 transition-all ease-in-out delay-75 group-hover:text-gray-300`,
            {
              "rotate-45 ": isCollapsed,
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4v16h16" />
            <path d="m4 20 7-7" />
          </svg>
        </span>
      </header>
      {!isCollapsed && children}
    </section>
  )
}
