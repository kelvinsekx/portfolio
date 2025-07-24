import React from "react"

/**
 *
 * @param {number} num
 * @returns
 */
export default function setFlickerAnimation(num) {
  // get all elements that should be animated
  const animatedElements =
    typeof document !== `undefined` ? (
      Array.from(document.querySelectorAll(".el_flicker"))
    ) : (
      <div />
    )

  if (!animatedElements.length) {
    return false
  }

  // helper function to wrap random letters in <span>
  const wrapRandomChars = (str, iterations = 1) => {
    const chars = str.split("")
    const excludedChars = [" ", "-", ",", ";", ":", "(", ")", ">", "<", "/"]
    const excludedIndexes = []
    let i = 0

    // run for the number of letters we want to wrap
    while (i < iterations) {
      const randIndex = Math.floor(Math.random() * chars.length)
      const c = chars[randIndex]

      // make sure we don't wrap a space or punctuation char
      // or hit the same letter twice
      if (!excludedIndexes.includes(randIndex) && !excludedChars.includes(c)) {
        chars[randIndex] = `<span class="flicker">${c}</span>`
        excludedIndexes.push(randIndex)
        i++
      }
    }

    return chars.join("")
  }

  // replace the plain text content in each element
  animatedElements.forEach((el) => {
    const text = el.textContent.trim()
    const count = num ? parseInt(num) : undefined
    el.innerHTML = wrapRandomChars(text, count)
  })
}
