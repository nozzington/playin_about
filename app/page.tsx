import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <p className="kicker">Founder Journey Platform</p>
      <h1>The Next Big Thing</h1>
      <p className="small">
        Professional-first portfolio and live journey log for building the next company. This v1 is content-ready:
        you can drop in essays, progress updates, and projects as they happen.
      </p>
      <Link href="/contact-about" className="cta primary">Connect via Email / LinkedIn</Link>
      <Link href="/spotlight" className="cta">View Spotlight Thesis Project</Link>

      <div className="grid" style={{ marginTop: "1.5rem" }}>
        <article className="card">
          <h3>Spotlight Project</h3>
          <p className="small">A richer interactive branching journey for your current master's thesis.</p>
        </article>
        <article className="card">
          <h3>Projects</h3>
          <p className="small">Lighter project trees for all other work so pages stay fast and mobile-friendly.</p>
        </article>
        <article className="card">
          <h3>Essays</h3>
          <p className="small">Publish as available, with a weekly rhythm goal when possible.</p>
        </article>
      </div>
    </section>
  );
}
