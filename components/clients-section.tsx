const clients = [
  "Lucky Red",
  "Circuito Cinema",
  "Medusa Film",
  "Notorious Pictures",
  "Leone Film Group",
  "Eagle Pictures",
  "Koch Media",
  "BIM Distribuzione",
]

export function ClientsSection() {
  return (
    <section className="clients">
      <div className="clients-inner">
        <div className="section-header">
          <div className="section-label">Hanno scelto di lavorare con me</div>
          <h2>Clienti &amp; Collaborazioni</h2>
        </div>
        <div className="clients-grid">
          {clients.map((name, i) => (
            <span key={name}>
              <div className="client-name">{name}</div>
              {i < clients.length - 1 && <div className="client-sep" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
