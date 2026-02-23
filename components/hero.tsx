export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-label">Digital Marketing Culturale</div>
          <h1>
            La cultura merita una <em>strategia</em> digitale
          </h1>
          <p className="hero-text">
            Oltre 13 anni di esperienza nel digital marketing per il mondo
            dell&apos;arte, del cinema e della cultura. Trasformo la
            visibilit&agrave; in connessioni autentiche.
          </p>
          <a href="#contatti" className="cta-btn">
            Parliamone
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="hero-photo">
          <div className="hero-badge">
            Dal
            <br />
            2013
          </div>
        </div>
      </div>
    </section>
  )
}
