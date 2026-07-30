const commitments = [
  {
    number: "01",
    title: "Transparent buying",
    copy: "Clear company information, organised purchase orders and straightforward communication from first enquiry to repeat order.",
  },
  {
    number: "02",
    title: "Traceable sourcing",
    copy: "We intend to purchase through established wholesale channels and keep the commercial paperwork needed for a clear chain of supply.",
  },
  {
    number: "03",
    title: "Brand respect",
    copy: "Listings, packaging requirements and marketplace activity are approached with the long-term reputation of each brand in mind.",
  },
  {
    number: "04",
    title: "Compliance minded",
    copy: "We review product, marketplace and supplier requirements before placing stock into the Amazon FBA fulfilment network.",
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Open the conversation",
    copy: "We learn about your catalogue, trade terms, channel policies and documentation requirements.",
  },
  {
    number: "02",
    title: "Select responsibly",
    copy: "We assess demand carefully and begin with focused, commercially sensible purchase orders.",
  },
  {
    number: "03",
    title: "Prepare accurately",
    copy: "Products are checked against listing, labelling, packaging and FBA preparation requirements.",
  },
  {
    number: "04",
    title: "Grow with evidence",
    copy: "We review performance, communicate clearly and scale only where the partnership is working.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Matangi Market home">
          <span className="brand-mark" aria-hidden="true">
            M
          </span>
          <span className="brand-name">
            Matangi Market
            <small>Pvt Limited</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#standards">Standards</a>
          <a href="#process">How we work</a>
          <a className="nav-cta" href="#contact">
            Trade enquiries
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              UK wholesale-to-market partner
            </p>
            <h1>
              Built to earn trust.
              <br />
              <em>Ready to grow responsibly.</em>
            </h1>
            <p className="hero-intro">
              Matangi Market is a newly established UK company sourcing branded
              goods from wholesale partners for careful resale through Amazon
              FBA.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#standards">
                Our supplier promise <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#company-details">
                View company details <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Business principles">
              <span>UK based</span>
              <span>Document-led sourcing</span>
              <span>Long-term outlook</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Our route from wholesale to market">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="route-card">
              <div className="route-header">
                <span>A clear route to market</span>
                <span className="live-dot">
                  <i aria-hidden="true" /> Growth model
                </span>
              </div>
              <div className="route">
                <div className="route-step">
                  <span className="route-icon" aria-hidden="true">
                    W
                  </span>
                  <div>
                    <small>01 / SOURCE</small>
                    <strong>Wholesale partners</strong>
                  </div>
                </div>
                <span className="route-line" aria-hidden="true" />
                <div className="route-step">
                  <span className="route-icon route-icon-light" aria-hidden="true">
                    M
                  </span>
                  <div>
                    <small>02 / PREPARE</small>
                    <strong>Matangi Market</strong>
                  </div>
                </div>
                <span className="route-line" aria-hidden="true" />
                <div className="route-step">
                  <span className="route-icon route-icon-dark" aria-hidden="true">
                    F
                  </span>
                  <div>
                    <small>03 / FULFIL</small>
                    <strong>Amazon FBA</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="readiness-card">
              <span className="readiness-label">Partnership readiness</span>
              <strong>Built for accountable trade</strong>
              <div className="readiness-row">
                <span>Company transparency</span>
                <span>Core</span>
              </div>
              <div className="readiness-bar">
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="principles-band" aria-label="Our business principles">
          <div>
            <strong>Genuine intent</strong>
            <span>Building a durable UK retail business</span>
          </div>
          <div>
            <strong>Measured buying</strong>
            <span>Focused orders, informed by demand</span>
          </div>
          <div>
            <strong>Supplier respect</strong>
            <span>Clear terms and professional conduct</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">
              <span aria-hidden="true" />
              Our purpose
            </p>
            <h2>A credible route for great brands.</h2>
          </div>
          <div className="about-content">
            <p className="lead-copy">
              We are building Matangi Market around a simple idea: wholesalers
              should know who is buying their products, how those products will
              reach customers and what standards guide the relationship.
            </p>
            <p>
              Our focus is branded consumer goods sourced from legitimate
              wholesale businesses. We aim to combine disciplined procurement
              with Amazon&apos;s fulfilment infrastructure, beginning carefully
              and growing through dependable supplier relationships.
            </p>
            <div className="model-note">
              <span className="model-note-mark" aria-hidden="true">
                ↗
              </span>
              <p>
                <strong>Our commercial model</strong>
                Buy through recognised wholesale channels, prepare stock to
                marketplace standards and use Amazon FBA for fulfilment.
              </p>
            </div>
          </div>
        </section>

        <section className="section standards" id="standards">
          <div className="section-heading standards-heading">
            <div>
              <p className="eyebrow eyebrow-light">
                <span aria-hidden="true" />
                Our supplier promise
              </p>
              <h2>Professional from the first order.</h2>
            </div>
            <p>
              As a young company, we know trust is earned through conduct. These
              are the standards we intend to bring to every supplier
              relationship.
            </p>
          </div>

          <div className="commitment-grid">
            {commitments.map((item) => (
              <article className="commitment-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" />
                How we work
              </p>
              <h2>Careful by design.</h2>
            </div>
            <p>
              A practical four-stage approach keeps the relationship clear,
              protects both parties and creates room for sustainable growth.
            </p>
          </div>

          <div className="process-list">
            {workingSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section company-details" id="company-details">
          <div className="details-card">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" />
                Company details
              </p>
              <h2>Visible, verifiable, accountable.</h2>
              <p>
                We welcome reasonable due diligence from manufacturers,
                distributors and wholesale account teams.
              </p>
            </div>

            <dl>
              <div>
                <dt>Legal name</dt>
                <dd>Matangi Market Pvt Limited</dd>
              </div>
              <div>
                <dt>Company stage</dt>
                <dd>Recently registered</dd>
              </div>
              <div>
                <dt>Business model</dt>
                <dd>Wholesale procurement &amp; Amazon FBA resale</dd>
              </div>
              <div>
                <dt>Registered address</dt>
                <dd>
                  46 Edison Gardens
                  <br />
                  Gateshead, NE8 4SE
                  <br />
                  United Kingdom
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow eyebrow-light">
            <span aria-hidden="true" />
            Wholesale partnerships
          </p>
          <h2>Let&apos;s build the right relationship.</h2>
          <p>
            We welcome introductions from UK wholesalers, distributors and
            brands looking for a thoughtful, growth-minded marketplace buyer.
          </p>
          <a className="button button-light" href="#company-details">
            Review our company profile <span aria-hidden="true">↑</span>
          </a>
          <p className="contact-note">
            Trade correspondence can be sent to our registered Gateshead
            address shown above.
          </p>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">
            M
          </span>
          <span className="brand-name">
            Matangi Market
            <small>Pvt Limited</small>
          </span>
        </a>
        <p>Building dependable wholesale partnerships for responsible growth.</p>
        <p>© 2026 Matangi Market Pvt Limited</p>
      </footer>
    </>
  );
}
