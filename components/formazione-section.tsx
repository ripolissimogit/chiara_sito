const corsi = [
  {
    tag: "Base / Avanzato",
    title: "Social Media Marketing per la Cultura",
    desc: "Strategie, contenuti e gestione dei canali social per musei, gallerie, festival e produzioni cinematografiche.",
    ore: "8 — 16 ore",
    max: "Max 20",
  },
  {
    tag: "Pratico",
    title: "Facebook & Instagram Ads",
    desc: "Creare, gestire e ottimizzare campagne pubblicitarie su Meta. Dal targeting al budget, dalla creativita all'analisi dei risultati.",
    ore: "8 ore",
    max: "Max 15",
  },
  {
    tag: "Pratico",
    title: "TikTok & Video Strategy",
    desc: "Comunicare la cultura su TikTok. Format, trend, advertising e strategie video per raggiungere nuovi pubblici.",
    ore: "6 ore",
    max: "Max 15",
  },
  {
    tag: "Nuovo",
    title: "AI per il Marketing Culturale",
    desc: "Claude, ChatGPT, Midjourney e gli strumenti AI applicati al marketing. Copywriting, visual, chatbot e automazioni per il settore culturale.",
    ore: "8 ore",
    max: "Max 12",
  },
  {
    tag: "Intensivo",
    title: "Analytics & Data Strategy",
    desc: "Google Analytics 4, Looker Studio e interpretazione dei dati. Imparare a leggere i numeri e trasformarli in decisioni di marketing.",
    ore: "6 ore",
    max: "Max 15",
  },
  {
    tag: "Workshop",
    title: "Siti Web & Landing Page",
    desc: "Progettare e costruire siti web e landing page con WordPress. Dalla struttura al contenuto, dall'ottimizzazione SEO alla conversione.",
    ore: "12 ore",
    max: "Max 10",
  },
]

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  )
}

export function FormazioneSection() {
  return (
    <section className="formazione" id="formazione">
      <div className="formazione-inner">
        <div className="formazione-intro">
          <div>
            <div className="section-label">Formazione</div>
            <h2>
              Impara a comunicare
              <br />
              la cultura, dal vivo
              <br />
              e da remoto
            </h2>
            <p className="formazione-text">
              Corsi pratici per professionisti, team e istituzioni culturali. Non
              teoria astratta: strategie reali, strumenti concreti, esercitazioni
              su casi veri. In aula o in videochiamata, lo stesso livello di
              profondita.
            </p>
          </div>
          <div className="formazione-modes">
            <div className="mode-card">
              <div className="mode-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8m-4-4v4" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
              </div>
              <div>
                <div className="mode-title">Da remoto</div>
                <p className="mode-desc">
                  Sessioni live via Zoom o Meet, one-to-one o in piccoli gruppi.
                  Flessibilita totale, stessa qualita dei corsi in aula.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="formazione-corsi">
          <div className="corsi-label">Catalogo corsi</div>
          <div className="corsi-grid">
            {corsi.map((corso) => (
              <div className="corso-card" key={corso.title}>
                <span className="corso-tag">{corso.tag}</span>
                <div className="corso-title">{corso.title}</div>
                <p className="corso-desc">{corso.desc}</p>
                <div className="corso-meta">
                  <span>
                    <ClockIcon /> {corso.ore}
                  </span>
                  <span>
                    <PersonIcon /> {corso.max}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
