"use client"

import "./globals.css"
import { useEffect, useRef, useCallback } from "react"

export default function Home() {
  const navLinksRef = useRef<HTMLUListElement>(null)
  const sunIconRef = useRef<SVGSVGElement>(null)
  const moonIconRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    const theme = saved || (prefersDark ? "dark" : "light")
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
      if (sunIconRef.current) sunIconRef.current.style.display = "none"
      if (moonIconRef.current) moonIconRef.current.style.display = "block"
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const html = document.documentElement
    const isDark = html.getAttribute("data-theme") === "dark"
    html.setAttribute("data-theme", isDark ? "light" : "dark")
    if (sunIconRef.current)
      sunIconRef.current.style.display = isDark ? "block" : "none"
    if (moonIconRef.current)
      moonIconRef.current.style.display = isDark ? "none" : "block"
    localStorage.setItem("theme", isDark ? "light" : "dark")
  }, [])

  const toggleMenu = useCallback(() => {
    navLinksRef.current?.classList.toggle("open")
  }, [])

  const closeMenu = useCallback(() => {
    navLinksRef.current?.classList.remove("open")
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const btn = form.querySelector(".form-submit") as HTMLButtonElement
    if (!btn) return
    const original = btn.innerHTML
    btn.innerHTML = "Messaggio inviato &#10003;"
    btn.style.opacity = "0.6"
    btn.disabled = true
    setTimeout(() => {
      btn.innerHTML = original
      btn.style.opacity = "1"
      btn.disabled = false
      form.reset()
    }, 2500)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="logo">
          chiara<span>.</span>
        </a>
        <div className="nav-right">
          <ul className="nav-links" ref={navLinksRef}>
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
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambia tema"
          >
            <svg
              ref={sunIconRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg
              ref={moonIconRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ display: "none" }}
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          </button>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-label">Digital Marketing Culturale</div>
            <h1>
              La cultura merita una <em>strategia</em> digitale
            </h1>
            <p className="hero-text">
              Oltre 12 anni di esperienza nel digital marketing per il mondo
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

      {/* NUMBERS */}
      <section className="numbers" id="chi-sono">
        <div className="numbers-inner">
          <div className="number-card">
            <div className="number-value">
              12<span>+</span>
            </div>
            <div className="number-label">
              Anni di esperienza nel digital marketing per il settore culturale
            </div>
          </div>
          <div className="number-card">
            <div className="number-value">
              150<span>+</span>
            </div>
            <div className="number-label">
              Progetti realizzati tra mostre, rassegne, festival e produzioni
              cinematografiche
            </div>
          </div>
          <div className="number-card">
            <div className="number-value">
              40<span>M</span>
            </div>
            <div className="number-label">
              Impression generate per istituzioni culturali e produzioni
              artistiche
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients">
        <div className="clients-inner">
          <div className="section-header">
            <div className="section-label">
              Hanno scelto di lavorare con me
            </div>
            <h2>{"Clienti & Collaborazioni"}</h2>
          </div>
          <div className="clients-grid">
            <div className="client-name">Lucky Red</div>
            <div className="client-sep" />
            <div className="client-name">Circuito Cinema</div>
            <div className="client-sep" />
            <div className="client-name">Medusa Film</div>
            <div className="client-sep" />
            <div className="client-name">Notorious Pictures</div>
            <div className="client-sep" />
            <div className="client-name">Leone Film Group</div>
            <div className="client-sep" />
            <div className="client-name">Eagle Pictures</div>
            <div className="client-sep" />
            <div className="client-name">Koch Media</div>
            <div className="client-sep" />
            <div className="client-name">BIM Distribuzione</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <div className="skills-inner">
          <div className="section-header">
            <div className="section-label">Toolkit</div>
            <h2>
              Gli strumenti che uso
              <br />
              ogni giorno
            </h2>
          </div>
          <div className="skills-list">
            {/* ADV & SOCIAL */}
            <div className="skills-group">
              <div className="skills-group-label">
                {"Advertising & Social"}
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/facebook-icon.svg"
                    alt="Facebook"
                  />
                  Facebook Ads
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/instagram-icon.svg"
                    alt="Instagram"
                  />
                  Instagram Ads
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img has-dark"
                    src="https://svgl.app/library/tiktok-icon-dark.svg"
                    alt="TikTok"
                  />
                  <img
                    className="skill-icon-img dark-variant"
                    src="https://svgl.app/library/tiktok-icon-light.svg"
                    alt="TikTok"
                  />
                  TikTok Ads
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/google.svg"
                    alt="Google"
                  />
                  Google Ads
                </div>
                <div className="skill-item">
                  <svg
                    className="skill-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 16l4-4 4 4 6-6" />
                    <circle
                      cx="21"
                      cy="10"
                      r="1.5"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                  {"Analytics & Data"}
                </div>
                <div className="skill-item">
                  <svg
                    className="skill-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4m-4 0l-3 4m3-4l3 4" />
                    <path d="M7 9h4m-4 3h2" />
                  </svg>
                  Strategia Social
                </div>
                <div className="skill-item">
                  <svg
                    className="skill-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                    <circle cx="20" cy="16" r="3" />
                    <path d="M20 14v4m-2-2h4" />
                  </svg>
                  Piani Editoriali
                </div>
                <div className="skill-item">
                  <svg
                    className="skill-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {"Tattica & Operativit\u00E0"}
                </div>
              </div>
            </div>
            {/* CMS & WEB */}
            <div className="skills-group">
              <div className="skills-group-label">{"CMS & Web"}</div>
              <div className="skills-list">
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/wordpress.svg"
                    alt="WordPress"
                  />
                  WordPress
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/shopify.svg"
                    alt="Shopify"
                  />
                  Shopify
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/squarespace.svg"
                    alt="Squarespace"
                  />
                  Squarespace
                </div>
              </div>
            </div>
            {/* AI */}
            <div className="skills-group">
              <div className="skills-group-label">
                Intelligenza Artificiale
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/claude-ai-icon.svg"
                    alt="Claude AI"
                  />
                  Claude AI
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img has-dark"
                    src="https://svgl.app/library/openai.svg"
                    alt="ChatGPT"
                  />
                  <img
                    className="skill-icon-img dark-variant"
                    src="https://svgl.app/library/openai_dark.svg"
                    alt="ChatGPT"
                  />
                  ChatGPT
                </div>
                <div className="skill-item">
                  <svg
                    className="skill-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18m-6-6l6 6 6-6" />
                    <circle cx="12" cy="8" r="3" />
                  </svg>
                  Midjourney
                </div>
              </div>
            </div>
            {/* TOOLS */}
            <div className="skills-group">
              <div className="skills-group-label">
                {"Strumenti & Design"}
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/vscode.svg"
                    alt="VS Code"
                  />
                  VS Code
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img has-dark"
                    src="https://svgl.app/library/cursor_light.svg"
                    alt="Cursor"
                  />
                  <img
                    className="skill-icon-img dark-variant"
                    src="https://svgl.app/library/cursor_dark.svg"
                    alt="Cursor"
                  />
                  Cursor
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/photoshop.svg"
                    alt="Photoshop"
                  />
                  Photoshop
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/premiere.svg"
                    alt="Premiere Pro"
                  />
                  Premiere Pro
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/canva.svg"
                    alt="Canva"
                  />
                  Canva
                </div>
                <div className="skill-item">
                  <img
                    className="skill-icon-img"
                    src="https://svgl.app/library/figma.svg"
                    alt="Figma"
                  />
                  Figma
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="servizi">
        <div className="section-header">
          <div className="section-label">Servizi</div>
          <h2>
            Cosa posso fare
            <br />
            per il tuo progetto
          </h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-title">Advertising Social</div>
            <p className="service-desc">
              Campagne ADV su Facebook, Instagram e TikTok pensate per il mondo
              culturale. Targeting mirato, budget ottimizzato, risultati
              misurabili.
            </p>
          </div>
          <div className="service-card">
            <div className="service-title">{"Strategia & Piano Social"}</div>
            <p className="service-desc">
              Piani strategici e tattici costruiti su obiettivi concreti.
              Dall&apos;analisi del posizionamento al calendario editoriale,
              ogni azione ha uno scopo.
            </p>
          </div>
          <div className="service-card">
            <div className="service-title">{"Analytics & Performance"}</div>
            <p className="service-desc">
              Monitoraggio dati, reportistica e ottimizzazione continua. Ogni
              decisione nasce dai numeri, non dalle sensazioni.
            </p>
          </div>
          <div className="service-card">
            <div className="service-title">{"Arte, Cinema & Cultura"}</div>
            <p className="service-desc">
              Promozione digitale per mostre, rassegne, festival, produzioni
              cinematografiche e istituzioni culturali. Il mio territorio da
              oltre 12 anni.
            </p>
          </div>
          <div className="service-card">
            <div className="service-title">{"Siti Web & Landing Page"}</div>
            <p className="service-desc">
              Progettazione e sviluppo di siti web e landing page su WordPress,
              Shopify e Squarespace. Pensati per convertire, ottimizzati per
              ogni dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="ai-section" id="ai">
        <div className="ai-inner">
          <div className="section-header">
            <div className="section-label">Intelligenza Artificiale</div>
            <h2>
              L&apos;AI al servizio
              <br />
              del marketing culturale
            </h2>
          </div>
          <div className="ai-grid">
            <div className="ai-card">
              <div className="ai-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="ai-card-title">Chatbot Intelligenti</div>
              <p className="ai-card-desc">
                Assistenti virtuali per musei, gallerie e sale cinematografiche.
                Rispondono ai visitatori 24/7, gestiscono prenotazioni e guidano
                il pubblico.
              </p>
              <div className="ai-card-tools">
                <span className="ai-tool-tag">Claude</span>
                <span className="ai-tool-tag">ChatGPT</span>
                <span className="ai-tool-tag">Tidio</span>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div className="ai-card-title">Copywriting AI</div>
              <p className="ai-card-desc">
                Testi per social, comunicati stampa, newsletter e campagne ADV
                generati e ottimizzati con l&apos;intelligenza artificiale.
                Pi&ugrave; veloci, pi&ugrave; efficaci.
              </p>
              <div className="ai-card-tools">
                <span className="ai-tool-tag">Claude</span>
                <span className="ai-tool-tag">Jasper</span>
                <span className="ai-tool-tag">Copy.ai</span>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="ai-card-title">
                {"Visual AI & Creativit\u00E0"}
              </div>
              <p className="ai-card-desc">
                Generazione di immagini, grafiche social e concept visivi con AI
                generativa. Dall&apos;idea alla campagna in tempi ridotti.
              </p>
              <div className="ai-card-tools">
                <span className="ai-tool-tag">Midjourney</span>
                <span className="ai-tool-tag">{"DALL\u00B7E"}</span>
                <span className="ai-tool-tag">Adobe Firefly</span>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 16l4-4 4 4 6-6" />
                </svg>
              </div>
              <div className="ai-card-title">Analytics Predittivi</div>
              <p className="ai-card-desc">
                Analisi predittiva del pubblico, segmentazione avanzata e
                ottimizzazione delle campagne con modelli di machine learning.
              </p>
              <div className="ai-card-tools">
                <span className="ai-tool-tag">GA4</span>
                <span className="ai-tool-tag">Looker Studio</span>
                <span className="ai-tool-tag">ChatGPT</span>
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M4 9h5M15 9h5M4 15h5M15 15h5M9 4v5M9 15v5M15 4v5M15 15v5" />
                </svg>
              </div>
              <div className="ai-card-title">
                {"Automazioni & Workflow"}
              </div>
              <p className="ai-card-desc">
                Flussi di lavoro automatizzati per email marketing, scheduling
                social, lead nurturing e CRM. Meno tempo operativo, pi&ugrave;
                strategia.
              </p>
              <div className="ai-card-tools">
                <span className="ai-tool-tag">Make</span>
                <span className="ai-tool-tag">Zapier</span>
                <span className="ai-tool-tag">n8n</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAZIONE */}
      <section className="formazione" id="formazione">
        <div className="formazione-inner">
          <div className="formazione-intro">
            <div>
              <div className="section-label">Formazione</div>
              <h2>
                Impara a comunicare
                <br />
                la cultura, dal vivo
                <br />e da remoto
              </h2>
              <p className="formazione-text">
                Corsi pratici per professionisti, team e istituzioni culturali.
                Non teoria astratta: strategie reali, strumenti concreti,
                esercitazioni su casi veri. In aula o in videochiamata, lo
                stesso livello di profondit&agrave;.
              </p>
            </div>
            <div className="formazione-modes">
              <div className="mode-card">
                <div className="mode-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="mode-title">In aula</div>
                  <p className="mode-desc">
                    Workshop e corsi intensivi in presenza. Ideali per team
                    aziendali, istituzioni culturali e gruppi fino a 20 persone.
                  </p>
                </div>
              </div>
              <div className="mode-card">
                <div className="mode-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8m-4-4v4" />
                    <circle cx="12" cy="10" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="mode-title">Da remoto</div>
                  <p className="mode-desc">
                    Sessioni live via Zoom o Meet, one-to-one o in piccoli
                    gruppi. Flessibilit&agrave; totale, stessa qualit&agrave;
                    dei corsi in aula.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="formazione-corsi">
            <div className="corsi-label">Catalogo corsi</div>
            <div className="corsi-grid">
              <div className="corso-card">
                <span className="corso-tag">Base / Avanzato</span>
                <div className="corso-title">
                  Social Media Marketing per la Cultura
                </div>
                <p className="corso-desc">
                  Strategie, contenuti e gestione dei canali social per musei,
                  gallerie, festival e produzioni cinematografiche.
                </p>
                <div className="corso-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    {"8 \u2014 16 ore"}
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    Max 20
                  </span>
                </div>
              </div>
              <div className="corso-card">
                <span className="corso-tag">Pratico</span>
                <div className="corso-title">
                  {"Facebook & Instagram Ads"}
                </div>
                <p className="corso-desc">
                  Creare, gestire e ottimizzare campagne pubblicitarie su Meta.
                  Dal targeting al budget, dalla creativit&agrave;
                  all&apos;analisi dei risultati.
                </p>
                <div className="corso-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    8 ore
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    Max 15
                  </span>
                </div>
              </div>
              <div className="corso-card">
                <span className="corso-tag">Pratico</span>
                <div className="corso-title">
                  {"TikTok & Video Strategy"}
                </div>
                <p className="corso-desc">
                  Comunicare la cultura su TikTok. Format, trend, advertising e
                  strategie video per raggiungere nuovi pubblici.
                </p>
                <div className="corso-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    6 ore
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    Max 15
                  </span>
                </div>
              </div>
              <div className="corso-card">
                <span className="corso-tag">Nuovo</span>
                <div className="corso-title">
                  AI per il Marketing Culturale
                </div>
                <p className="corso-desc">
                  Claude, ChatGPT, Midjourney e gli strumenti AI applicati al
                  marketing. Copywriting, visual, chatbot e automazioni per il
                  settore culturale.
                </p>
                <div className="corso-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    8 ore
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    Max 12
                  </span>
                </div>
              </div>
              <div className="corso-card">
                <span className="corso-tag">Intensivo</span>
                <div className="corso-title">
                  {"Analytics & Data Strategy"}
                </div>
                <p className="corso-desc">
                  Google Analytics 4, Looker Studio e interpretazione dei dati.
                  Imparare a leggere i numeri e trasformarli in decisioni di
                  marketing.
                </p>
                <div className="corso-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    6 ore
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    Max 15
                  </span>
                </div>
              </div>
              <div className="corso-card">
                <span className="corso-tag">Workshop</span>
                <div className="corso-title">
                  {"Siti Web & Landing Page"}
                </div>
                <p className="corso-desc">
                  Progettare e costruire siti web e landing page con WordPress.
                  Dalla struttura al contenuto, dall&apos;ottimizzazione SEO
                  alla conversione.
                </p>
                <div className="corso-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    12 ore
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    Max 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
              insieme come darle la visibilit&agrave; che merita.
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
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <button type="submit" className="form-submit">
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
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <p>
            {"\u00A9"} 2026 Chiara Natali. Tutti i diritti riservati.
          </p>
          <ul className="footer-links">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie</a>
            </li>
            <li>
              <a href="#">Termini</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
