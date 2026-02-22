const aiCards = [
  {
    title: "Chatbot Intelligenti",
    desc: "Assistenti virtuali per musei, gallerie e sale cinematografiche. Rispondono ai visitatori 24/7, gestiscono prenotazioni e guidano il pubblico.",
    tools: ["Claude", "ChatGPT", "Tidio"],
    icon: "chat",
  },
  {
    title: "Copywriting AI",
    desc: "Testi per social, comunicati stampa, newsletter e campagne ADV generati e ottimizzati con l'intelligenza artificiale. Piu veloci, piu efficaci.",
    tools: ["Claude", "Jasper", "Copy.ai"],
    icon: "pen",
  },
  {
    title: "Visual AI & Creativita",
    desc: "Generazione di immagini, grafiche social e concept visivi con AI generativa. Dall'idea alla campagna in tempi ridotti.",
    tools: ["Midjourney", "DALL-E", "Adobe Firefly"],
    icon: "image",
  },
  {
    title: "Analytics Predittivi",
    desc: "Analisi predittiva del pubblico, segmentazione avanzata e ottimizzazione delle campagne con modelli di machine learning.",
    tools: ["GA4", "Looker Studio", "ChatGPT"],
    icon: "chart",
  },
  {
    title: "Automazioni & Workflow",
    desc: "Flussi di lavoro automatizzati per email marketing, scheduling social, lead nurturing e CRM. Meno tempo operativo, piu strategia.",
    tools: ["Make", "Zapier", "n8n"],
    icon: "workflow",
  },
]

function AiIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      )
    case "pen":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    case "image":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      )
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18" />
          <path d="M7 16l4-4 4 4 6-6" />
        </svg>
      )
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16v16H4z" />
          <path d="M9 9h6v6H9z" />
          <path d="M4 9h5M15 9h5M4 15h5M15 15h5M9 4v5M9 15v5M15 4v5M15 15v5" />
        </svg>
      )
    default:
      return null
  }
}

export function AiSection() {
  return (
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
          {aiCards.map((card) => (
            <div className="ai-card" key={card.title}>
              <div className="ai-card-icon">
                <AiIcon icon={card.icon} />
              </div>
              <div className="ai-card-title">{card.title}</div>
              <p className="ai-card-desc">{card.desc}</p>
              <div className="ai-card-tools">
                {card.tools.map((tool) => (
                  <span className="ai-tool-tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
