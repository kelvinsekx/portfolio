import { useEffect, useState } from "react"

export const useDarkMode = () => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }
  // const [theme, setTheme] = useState('light');
  const [theme, setTheme] = useState(websiteTheme)
  // const [componentMounted, setComponentMounted] = useState(false)

  const toggleTheme = () => {
      window.__setPreferredTheme( websiteTheme === 'dark' ? 'light' : 'dark')
      
  }

  useEffect(() => {
    setTheme( window.__theme );
    window.__onThemeChange = () => {
      setTheme( window.__theme );
    };
  }, [])

  return [theme, toggleTheme]
}
