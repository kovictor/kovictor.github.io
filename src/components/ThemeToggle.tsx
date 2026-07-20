import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Use ${nextTheme} theme`}
      title={`Use ${nextTheme} theme`}
    >
      <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
      <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
