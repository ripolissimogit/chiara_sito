"use client"

import { useState } from "react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 2500)
  }

  return (
    <section className="contact" id="contatti">
      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-label">Contatti</div>
          <h2>
            Raccontami il
            <br />
            tuo progetto
          </h2>
          <p className="contact-text">
            Ogni progetto culturale ha una storia unica. Scrivimi per capire
            insieme come darle la visibilita che merita.
          </p>
          <div className="contact-detail">
            <a href="mailto:chiara@chiaranatali.it">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              chiara@chiaranatali.it
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Il tuo nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="La tua email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project">Progetto</label>
            <input
              type="text"
              id="project"
              name="project"
              placeholder="Es. Mostra, Film, Festival..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              name="message"
              placeholder="Raccontami di cosa hai bisogno"
              required
            />
          </div>
          <button
            type="submit"
            className="form-submit"
            disabled={submitted}
            style={submitted ? { opacity: 0.6 } : undefined}
          >
            {submitted ? (
              "Messaggio inviato \u2713"
            ) : (
              <>
                Invia messaggio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
