export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a className="text-xl font-bold tracking-tight text-slate-950" href="/">
          Ecommerce
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-sm font-medium text-slate-600">
            <li>
              <a className="transition hover:text-slate-950" href="#products">
                Products
              </a>
            </li>
            <li>
              <a className="transition hover:text-slate-950" href="#about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
