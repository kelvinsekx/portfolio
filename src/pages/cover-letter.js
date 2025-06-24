import React from "react"
import { Link } from "gatsby"

import CollapsibleSection from "./../components/CollapsibleSection"
import { UserTimeInfo } from "./../components/UserTimeInfo"

import kelvinPhoto from "./../assets/my-photo.jpg"
import ibtcPhoto from "./../assets/ibtc-group.jpg"
import { HomeIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full px-2 md:px-1 md:w-4/6 mx-auto py-10">
      <Link to="/">
        <HomeIcon />
      </Link>
      <div className="md:w-5/7 px-5 md:px-0 mx-auto">
        <header className="my-8 space-y-0">
          <h1 className="text-4xl leading-12 font-black tracking-wide">
            Kelvinsekx&apos;s Cover Letter
          </h1>
          <p className="font-medium text-base text-gray-600 tracking-tight">
            My government name is Ukuejubola Kelvin Oritsetimeyin.
          </p>
          <ul className="flex gap-2 tracking-tighter">
            <li>
              <a
                className="underline text-sm"
                href="https://github.com/kelvinsekx"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="underline text-sm"
                href="https://linkedin.com/in/kelvinsekx"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a className="underline text-sm" href="https://x.com/kelvinsekx">
                Twitter
              </a>
            </li>
          </ul>
        </header>

        <main>
          <p className="text-3xl font-semibold my-4">Hi </p>
          <p>Thank you for the opportunity to be considered.</p>

          <CollapsibleSection header="Who am I?">
            <>
              <p>
                I am Kelvin, though most people know me as Kelvinsekx. I live in
                Ibadan, Nigeria. I know you might be thinking, &quot;Hmm,
                haven&apos;t heard much about that place—what&apos;s going on
                there?&quot; Fun fact is{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ibadan"
                  className="hover:underline"
                >
                  <span>
                    Ibadan is the largest city in West Africa and one of the
                    neighbouring states to the very popular, Lagos
                  </span>
                  <span className="text-black font-semibold"> #</span>
                </a>
                .
              </p>
              <p>
                You might also be wondering about the timezone
                difference—totally understandable! Here&apos;s a quick look:
              </p>
              <UserTimeInfo />
              {/* <p>
                I&apos;m especially drawn to this role because the job posting
                sounded like a dream come true. One of those rare,
                once-in-a-lifetime opportunities. I was intrigued about the
                intersection of technology, money, and crypto where Payecard
                sits.
                <b> Money should indeed solve problems and not create more, </b>
                What better way to live by that than being part of the solution?
                That being said, let&apos;s get to my story and why I think we
                are are a great fit for each other.
              </p> */}
              <div className=" w-full rounded-2xl relative overflow-hidden">
                <img
                  src={kelvinPhoto}
                  alt="a good picture of me, kelvinsekx"
                  className="object-cover object-center"
                  fill
                />
              </div>
            </>
          </CollapsibleSection>
          <CollapsibleSection header="My Story">
            <>
              <p>
                I am a 27 year old living in Ibadan.{" "}
              </p>
              <p>
                For my title, I am a software engineer & product manager. I have
                strong experience in web technologies and backend's like Node.
                Sometimes it is just difficult to box my specific role to being
                a developer only or product manager only. As I have led
                positions both as an engineer and manager. Plus I actively still
                do both.
              </p>
              <p>
                I started my programming journey around 2019 when I was learning
                HTML, CSS and PHP. I would usually meet my old friend Tayo, who
                is now a Senior Mobile Engineer at Kuda - one of the biggest
                Neobanks in Africa, to teach me whatever even though he
                primarily writes Java. After that I moved on to learning
                javascript and node which helped me fall in love with React at
                the time.
              </p>
              <p>
                Between 2019 and 2021, I worked primarily as an independent
                developer, handling freelance gigs for companies like OlaOla
                Foods and Sharpview Optometric Clinic. Eventually, I joined a
                friend&apos;s startup as a Frontend Developer.
              </p>
              <p>
                In 2021, I founded Ibadan Techies Club with the help of my
                mentor, Jason Palmer, where I went on to raise over $10K and
                held dozens of physical meetups between 2022 and 2024. There I
                was able to convince Jason, IJe, Mark and Zakk as backers to
                raise funds and shape the future of Tech in Ibadan.
              </p>

              <div className="w-full rounded-2xl relative overflow-hidden">
                <img
                  src={ibtcPhoto}
                  alt="a group photo from one of the meetups at Ibadan Techies Club"
                  className="object-cover"
                  fill
                />
              </div>
              <a href="https://linkedin.com/in/kelvinsekx">
                Since then, I have gone on to work with{" "}
                <b className="text-black tracking-tight underline">
                  Wigxel as Frontend Developer
                </b>{" "}
                before bagging an additional title of Quality Assurance,{" "}
                <b className="text-black tracking-tight underline">
                  Sproutly as a Senior Frontend Developer
                </b>
                ,{" "}
                <b className="text-black tracking-tight underline">
                  and presently at Liinae as a Technical Product Manager
                </b>
                .
              </a>
            </>
          </CollapsibleSection>
          <CollapsibleSection header="Why me?">
            <>
              <p>
                I am an hustler, an entrepreneur and have a great eye for
                details. In short, I do not stop until it comes out best. I
                believe everything worth doing is worth doing well. I pour
                everything into my craft— my experience, my code, my discipline.
              </p>

              <p>
                I believe code is meant to make life easier, and it should
                always be human-first.
              </p>
              {/* <Testimony /> */}

              <section>
                <header className="font-semibold">React</header>
                <p>
                  I have over 5 years experience dabbling with React
                  professionally. Starting from Gatsby days and through the
                  early days of Next. I have written a lot of React code, trust
                  me!
                </p>
              </section>
              <section>
                <header className="font-semibold">Vue</header>
                <p>
                  I joined Sproutly in 2024. And my single responsibility was to
                  take their MVP at 40% to 100% completion in 3 months. A
                  codebase of 3000+ lines of code written entirely in Vue and
                  Nuxt. You know what I did? I did it in 6 weeks. I led a team
                  of another 2 vue engineers shaping and redefinig how they
                  work.
                </p>
              </section>
              <section>
                <header className="font-semibold">Backend, NodeJS</header>
                <p>
                  Most of my roles although frontend, have forced me to dabble
                  in Node. From the early days of freelance up untl, I have
                  shown to have an excellent understanding of node and how to
                  scae scalable softwares with them.
                </p>
              </section>
              <section>
                <header className="font-semibold">Mobile, Flutter</header>
                <p>
                  At liinae, I was responsible for the entire design for our app
                  written in dart and flutter. Aside this, I implemented
                  designs, debugged issues and troubleshoot difficult bugs.
                </p>
              </section>
              <section>
                <header className="font-semibold">Product Management</header>
                <p>
                  At liinae, my role was not limited to managing the engineers.
                  I was tasked to manage budgeted, firing and employing, define
                  the user experience and user research side by side the
                  designers and manage the entire relationships between
                  founders, engineering team and users.
                </p>
              </section>
              <section>
                <header className="font-semibold">Community</header>
                <p>
                  I founded the first formidable community out of Ibadan. Led
                  rounds of raises, 5+ directors and backers all over the globe.
                </p>
              </section>
              <section>
                <header className="font-semibold">Hardworking</header>
                <p>
                  I am an excellent communicator and have a great eye for
                  details. All of these combined with my untiring hardwork and
                  desire to learn, I am sure I will be a good bet and return on
                  investment.
                </p>
              </section>
            </>
          </CollapsibleSection>
          <div className="w-full h-[0.5px] bg-[#666] my-10"></div>
          <p className="mb-10">
            There is a lot more I would love to talk about, but I hope I already
            convinced you enough to start a conversation. I am looking forward
            to your feedback!
          </p>
        </main>
        {/* <footer>
          <p>
            I did not get the idea from heavens. This portfolio is built on the
            amazing idea from
              Robin Malfait
          </p>
        </footer> */}
      </div>
    </div>
  )
}
