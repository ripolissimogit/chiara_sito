const services = [
  {
    title: "Advertising Social",
    desc: "Campagne ADV su Facebook, Instagram e TikTok pensate per il mondo culturale. Targeting mirato, budget ottimizzato, risultati misurabili.",
  },
  {
    title: "Strategia & Piano Social",
    desc: "Piani strategici e tattici costruiti su obiettivi concreti. Dall'analisi del posizionamento al calendario editoriale, ogni azione ha uno scopo.",
  },
  {
    title: "Analytics & Performance",
    desc: "Monitoraggio dati, reportistica e ottimizzazione continua. Ogni decisione nasce dai numeri, non dalle sensazioni.",
  },
  {
    title: "Arte, Cinema & Cultura",
    desc: "Promozione digitale per mostre, rassegne, festival, produzioni cinematografiche e istituzioni culturali. Il mio territorio da oltre 12 anni.",
  },
  {
    title: "Siti Web & Landing Page",
    desc: "Progettazione e sviluppo di siti web e landing page su WordPress, Shopify e Squarespace. Pensati per convertire, ottimizzati per ogni dispositivo.",
  },
]

export function ServicesSection() {
  return (
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
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-title">{service.title}</div>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
