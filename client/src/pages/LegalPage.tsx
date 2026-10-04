import { Link } from 'react-router-dom'

type LegalSection = {
  heading: string
  body: string[]
}

type LegalPageProps = {
  title: string
  intro: string
  sections: LegalSection[]
}

export default function LegalPage({
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <header className="legal-header">
          <Link className="legal-back" to="/">
            ← Back to Azimuth
          </Link>

          <span className="landing-eyebrow">LEGAL</span>

          <h1>{title}</h1>

          <p>{intro}</p>
        </header>

        <div className="legal-body">
          {sections.map((section) => (
            <section key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>

              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
