export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-extrabold">
          <span className="text-violet-500">Derma</span>match AI
        </h1>

        <nav className="hidden gap-8 text-slate-300 md:flex">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#analysis" className="hover:text-white transition">
            Analysis
          </a>

          <a href="#styles" className="hover:text-white transition">
            Styles
          </a>
        </nav>

        <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold transition hover:bg-violet-500">
          Get Started
        </button>

      </div>
    </header>
  );
}