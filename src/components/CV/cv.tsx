import React from "react"
import styles from "./cv.module.css"

const data = [
  {
    header: "Education",
    stems: [
      "Top 2% in class, Bsc(Ed) University of Ibadan (2014 - 2019)",
      "All Distinctions, WAESCC, Rochas Foundation College, Ibadan (2008 - 2014)",
    ],
  },
  {
    header: "Experience",
    stems: [
      "<b>Lead</b>, Ibadan Techies Club ( October 2022 - Present)",
      "<b>Frontend Engineer</b>, Envoi - a logistic startup in Portharcourt, Nigeria (October 2021 - 2022).",
      "<b>Web Developer</b>, Concrete Communications, a local software agency, Lagos (Dec, 2020 - October 2021)",
    ],
  },
  {
    header: "Freelance and Contract",
    stems: [
      'The Wagers House - a web3 betting platform (March 2023). Check it out on <a href="https://wagers-frontend-client-mmtf.vercel.app/" style="text-decoration: underline; color: #FEBE10;word-break: break-all">https://wagers-frontend-client-mmtf.vercel.app/</a>. Upon visiting the page, click anywhere on the screen to begin a journey.',
      'Jesus Tabernacle - a church website (June 2023). Check it out at <a href="https://www.jesustabernacle.com/" style="text-decoration: underline; color: #FEBE10; word-break: break-all">https://www.jesustabernacle.com/</a>',
    ],
  },
]

export const CV = () => {
  return (
    <div>
      <h1>Kelvinsekx CV</h1>
      {data.map((d, i) => (
        <Board {...d} key={i} />
      ))}
    </div>
  )
}

const Board = ({
  header,
 stems
}: {
  header: string
  stems: string[]
}) => {
  return (
    <div className={styles.board}>
      <div className={styles.boardHeader}>{header}</div>
      <div className={styles.boardBoxHolder}>
        {stems.map((stem, i) => (
          <BoardBox child={stem} key={i} />
        ))}
      </div>
    </div>
  )
}

const BoardBox: React.FC<React.ComponentPropsWithoutRef<"div"> & {child: string}> = ({
  className,
  child,
}) => {
  return (
    <div
      className={`${styles.boardBox} ${className}`}
      dangerouslySetInnerHTML={{ __html: child }}
    ></div>
  )
}
