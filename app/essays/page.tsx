const placeholders = [
  "Essay #1 - Why this problem matters",
  "Essay #2 - What changed this week",
  "Essay #3 - What failed and what I learned"
];

export default function EssaysPage() {
  return (
    <section>
      <p className="kicker">Essays</p>
      <h1>Journal / Writing</h1>
      <p className="small">Publishing cadence: as available, ideally weekly.</p>
      <div className="grid">
        {placeholders.map((title) => (
          <article key={title} className="card">
            <h3>{title}</h3>
            <p className="small">Placeholder content ready for your writing.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
