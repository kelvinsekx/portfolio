export default function setFlickerAnimation() {
  // get all elements that should be animated
  let Document;
  if (typeof document !== "undefined"){
    Document = document
  }
  const animatedElements = Array.from(
    Document.querySelectorAll(".el_flicker")
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
  animatedElements.forEach(el => {
    const text = el.textContent.trim()
    const count = el.dataset.flickerChars
      ? parseInt(el.dataset.flickerChars)
      : undefined
    el.innerHTML = wrapRandomChars(text, count)
  })
}
