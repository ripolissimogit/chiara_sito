"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const theme = saved || (prefersDark ? "dark" : "light")
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
      setIsDark(true)
    }
  }, [])

  function toggleTheme() {
    const html = document.documentElement
    const currentlyDark = html.getAttribute("data-theme") === "dark"
    html.setAttribute("data-theme", currentlyDark ? "light" : "dark")
    localStorage.setItem("theme", currentlyDark ? "light" : "dark")
    setIsDark(!currentlyDark)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav>
      <a href="#" className="logo">
        chiara<span>.</span>
      </a>
      <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li>
            <a href="#servizi" onClick={closeMenu}>
              Servizi
            </a>
          </li>
          <li>
            <a href="#ai" onClick={closeMenu}>
              AI
            </a>
          </li>
          <li>
            <a href="#formazione" onClick={closeMenu}>
              Formazione
            </a>
          </li>
          <li>
            <a href="#chi-sono" onClick={closeMenu}>
              Chi sono
            </a>
          </li>
          <li>
            <a href="#contatti" onClick={closeMenu}>
              Contatti
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambia tema">
          {!isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          )}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
