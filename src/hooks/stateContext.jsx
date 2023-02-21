import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const stateContext = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'))
  }
  useEffect(() => {
    const data = localStorage.getItem('theme')
    if (data) {
      setTheme(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  })
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <div id={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useStateContext = () => useContext(ThemeContext)
