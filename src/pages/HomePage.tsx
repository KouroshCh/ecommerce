import { Header } from '../components/Header'

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          React + TypeScript + Tailwind CSS
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Your ecommerce project is ready to build.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The foundation is set up. Next, we can design the storefront and
          decide which shopping features belong in the first version.
        </p>
      </main>
    </div>
  )
}
