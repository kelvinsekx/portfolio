import { useEffect, useState } from "react"

export const useDarkMode = () => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    console.log(websiteTheme)
    websiteTheme = window.__theme
    console.log(websiteTheme)
  }

  const [theme, setTheme] = useState(websiteTheme)

  const toggleTheme = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  return [theme, toggleTheme]
}
