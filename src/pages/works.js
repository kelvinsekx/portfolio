import * as React from "react"
import LiinaeLogo from "../assets/liinae-svg-out-light-black.png"
import IBTCLogo from "../assets/ibadan_techies_logo.jpg"
import Sample1 from "../assets/sample_from_ibtc_meetup.jpg"

const Works = () => {
  return (
    <div className="p-8 md:p-20 [&_figcaption]:text-center [&_a]:text-blue-600 [&_a]:font-semibold space-y-32">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-y-5">
        <div className="space-y-3 md:w-2/4">
          <p>
            Since 2024, I have been actively involved in building{" "}
            <strong>Liinae</strong> alongside three co-founders ({" "}
            <a href="https://www.linkedin.com/in/ireayomide-o-1578a287/">
              Ireayo
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/lynn-agoye-99b20319/">Lynn </a>{" "}
            and <a href="https://www.linkedin.com/in/ijenwokolo/">Ije</a>
            ). Combining responsibilities as a product manager, technical lead,
            and developer.
          </p>
          <p>
            Today, Liinae is driven by a multidisciplinary team of seven
            engineers and designers that I spearheaded. Our scope of work
            spanned logo, brand and product design, product architecture,
            software development, and cloud infrastructure automation.
          </p>
          <p>
            My contributions extended beyond product delivery. I was directly
            responsible for ideation and validation, budgeting, development and
            execution, company-building and team formation, as well as managing
            day-to-day operations to ensure alignment and momentum across the
            team.
          </p>
        </div>

        <a href="https://liinae.com">
          <figure>
            <img
              src={LiinaeLogo}
              width={400}
              height={400}
              alt="Liinae Logo"
              className="rounded-md object-cover object-center border border-gray-300"
            />
            <figcaption className="text-blue-600 font-semibold">
              Liinae, A venture-backed startup initiative
            </figcaption>
          </figure>
        </a>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="space-y-3">
          <p>
            From 2022 - 2024, I and{" "}
            <a href="https://www.linkedin.com/in/jason-palmer-325505274/">
              Jason (A principal PM at Meta)
            </a>{" "}
            helped host dozens of free physical tech meetups in Ibadan. We
            raised over $10k along the way.
          </p>
        </div>
        <div className="flex">
          <figure>
            <img
              src={IBTCLogo}
              width={100}
              height={100}
              alt="Liinae Logo Figure"
              className="rounded-md object-cover object-center border border-gray-300"
            />
            <figcaption className="text-blue-600 font-semibold">
              Ibadan Techies Club
            </figcaption>
          </figure>
          <figure>
            <img
              src={Sample1}
              width={200}
              height={200}
              alt="Liinae Logo Figure"
              className="rounded-md object-cover object-center border border-gray-300"
            />
            <figcaption className="text-blue-600 font-semibold">
              A picture from one of the meetups
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-5">
        <div className="space-y-3 md:w-[40rem]">
          <p className="text-lg">
            <span className="text-2xl md:text-4xl">
              I can help you build your next product.
            </span>{" "}
            Why choose me over others with fancy venture titles:
          </p>
          <ul className="space-y-3">
            <li className="space-x-2">
              <span>
                {" "}
                As an individual, I can help move your product idea faster. No
                bureaucracy, no internal approvals, no layers of management. I
                can make decision and act immediately alongside you, which is
                crucial for a fast-paced startup.
              </span>
            </li>
            <li>
              Working with an individual is more cost-effective. You're not
              paying for a company overhead, office space or admin staff. You
              are going to pay directly for the work we do and the results we
              deliver.
            </li>
            <li>
              We only trigger payments per milestone. My team works with
              milestones ( agreed upon list of tasks/features to be covered per
              phase), this means we get to spread pay along our number of
              milestones. No hassle, no worries.
            </li>
            <li className="font-medium">
              I have done it with Liinae and I can do it better with you.
            </li>
          </ul>
        </div>
        <div className="flex">
          <figure>
            <span className="text-9xl font-black">?</span>
            <figcaption className="text-blue-600 font-semibold">
              Be next
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Works
