import React, { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem("dark-theme") === "true")

  const toggleTheme = () => setDarkTheme(prevTheme => {
    const newTheme = !prevTheme
    localStorage.setItem("dark-theme", newTheme)
    return newTheme
  })

  useEffect(() => setDarkTheme(localStorage.getItem("dark-theme") === "true"), [])

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
