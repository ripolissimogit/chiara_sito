"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    const next = isDark ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
    setIsDark(!isDark)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  const navItems = [
    { href: "#servizi", label: "Servizi" },
    { href: "#ai", label: "AI" },
    { href: "#formazione", label: "Formazione" },
    { href: "#chi-sono", label: "Chi sono" },
    { href: "#contatti", label: "Contatti" },
  ]

  return (
    <nav className="nav-bar">
      <a href="#" className="logo">
        chiara<span>.</span>
      </a>
      <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} role="navigation">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Cambia tema"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          ) : (
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
