export default function Section({ id, title, intro, alt, children }) {
  return (
    <section id={id} className={alt ? 'bg-surface' : ''} aria-labelledby={`${id}-h`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 id={`${id}-h`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
