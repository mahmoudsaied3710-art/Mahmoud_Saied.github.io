export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p><span className="font-display font-semibold text-ink">Mahmoud Saied</span> · Network Engineer | IT</p>
        <p>© {new Date().getFullYear()} Mahmoud Saied. All rights reserved.</p>
      </div>
    </footer>
  )
}
