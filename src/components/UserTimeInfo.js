import React, { useEffect, useState } from "react"

export function UserTimeInfo() {
  const [timezone, setTimezone] = useState("")
  const [userTimeStr, setUserTime] = useState("")
  const [timeDifference, setTimeDifference] = useState(0)
  const [lagosTimeStr, setMyTime] = useState("")

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const mytime = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Lagos",
    })
    const usertime = new Date().toLocaleString("en-US", { timeZone: tz })

    setTimezone(tz)

    const lagosTime = new Date(lagosTimeStr)
    const userTime = new Date(userTimeStr)

    // Calculate difference in hours
    const diffHours = userTime.getTime() - lagosTime.getTime()
    setTimeDifference(diffHours)

    const timer = setInterval(() => {
      setMyTime(mytime)
      setUserTime(usertime)
    }, 1000)

    return () => clearInterval(timer)
  }, [lagosTimeStr, userTimeStr])

  return (
    <div>
      <div className="space-y-3 my-6 text-[#444] text-2xl">
        <div className="border border-gray-100 rounded-md p-4 bg-gray-50 text-gray-800">
          <p className="text-base">My Timezone</p>
          <div className="flex gap-2">
            <p>Africa/Lagos</p>
            <p>{lagosTimeStr}</p>
          </div>
        </div>
        <div className="border border-gray-100 rounded-md p-4 bg-gray-50 text-gray-800">
          <p className="text-base">Your Timezone</p>
          <div className="flex gap-2">
            <p>{timezone}</p>
            {timezone && <p>{userTimeStr}</p>}
          </div>
        </div>
      </div>
      <p>
        I am willing to work between 7am - 8pm (my local time) which is{" "}
        {7 + timeDifference}am - {8 + timeDifference}pm (your local time) to
        cover for whatever number of hours you need me to work for a day. Long
        story short, I don&apos;t think the timezone difference would be any
        issue here.
      </p>
    </div>
  )
}
