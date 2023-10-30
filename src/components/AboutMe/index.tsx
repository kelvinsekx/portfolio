import * as React from "react"
import styles from './styles.module.css'

import { colors } from "../utils";
import {randColor} from "../utils/hooks"
import clsx from "clsx";

import { CV } from "../CV/cv";


const {useState} = React;

const FloatingWrapper: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    show: string,
    setShow: (i:string)=> void
  }
> = ({show, setShow}) => {
  const buttons = ["mission", "short", "long", 'cv'].map((each) => (
    <button
      key={each}
      className={clsx(styles.defaultBtn, {
        [`${styles.activeBtn}`]: (show === each),
      })}
      onClick={() => setShow(each)}
    >
      {each}
    </button>
  ))
  return <div className={styles.floatingBtns}>{buttons}</div>
}



const BanWrapper: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = ()=> {
   const [show, sShow] = useState("short");

   const setShow = (i: string)=> sShow(i)

   const showIf = () => {
     if (show === "short") {
       return <Short />
     } else if (show === "mission") {
       return <Mission />
     } else if (show === "long") {
       return <Long />
     }else {
      return <CV />
     }
   }
  return (
    <>
      <FloatingWrapper show={show} setShow={setShow} />
      <div>
        {showIf()}
      </div>
    </>
  )
}

export default BanWrapper

export function Mission() {
  return (
    <p>
      My mission is to use web technologies to solve my people's
      problem. Building neat, reusable, fun and
      decomposable web along the way - Yes, I cherish the small things on the web.
    </p>
  )
}

export function Short() {
  const r = randColor()

  return (
    <div>
      <p>Hi there, thanks for visiting.</p>
      <p>
        My name is Kelvin - but popular as Kelvinsekx. 
        I'm the co-founder and community lead of 
        <a style={{color:colors[r], fontWeight: 500}} href="https://ibadantc.org"> Ibadan Techies Club</a>.
        I'm also a community advisor and enthusiast, engineering manager, and like bantering and throwing unserious take on the internet.
      </p>
      <p>
        Putting coding aside, I enjoy listening to good music and playing with
        oil and acrylic paints.
      </p>
    </div>
  )
}

export function Long() {
  const r = randColor()
  return (
    <div style={{display: 'flex', flexDirection:'column', gap: '0.9em'}}>
      <p>
        Well, Thanks for wanting to read the details. My full name is Ukuejubola
        Kelvin Oritsetimeyin. I am from Delta State, Nigeria. I am an educator,
        developer and economist. A proud graduate of Economics and Education
        (B.sc[Ed]) from the{" "}
        <a
          style={{ color: colors[r], fontWeight: 500 }}
           href="https://www.ui.edu.ng"
          >University of Ibadan
          </a>.
      </p>
      <p>In my little years of experience, I have worked full-time for OlaOla Poundo Yam, Concrete Communication, Wigxel Corp and presently, Ibadan Techies. I am passionate about OSS. I have helped improve a handful of them like Opensauced and LangCorrect.</p>
      <p>
        Before coding, I was into Oil and Acrylic painting in my early undergrad days (2014-2016). Then got into programming in my final years during the ASSU strike (but this strike was internal than general). I would use my free time during this strike to learn HTML, CSS, and PHP. The rest is more or less an history. In summary, I am a self taught engineer.
      </p>
      <p>
        After some time learning PHP, I got introduced into javascript by Tayo. I fell in love with the animations that comes with it. I got so hocked and started my journey to mastering the language.
      </p>
      <p>
        Because of my love for econometrics, I spend few time to learn python,
        how python could be used in data Science and econometrics. To
        me, econometrics is the future of economics and looking from the
        programmatic side of it, it will be fun.
      </p>
      <p>
        You've just learnt so much about the background, on a lighter note I can
        be very jovial and no dull moment with me.
      </p>
      <p>
        If you got here, thanks for reading so far and you deserve to laugh 🤣.
        TAKE THIS JOKE:{" "}
        <span style={{color: 'var(--sekx-grey)'}}>
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
  
