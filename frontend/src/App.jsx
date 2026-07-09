import Hero from "./components/Hero";
import Features from "./components/Features";
import AnalysisSection from "./components/AnalysisSection";
import OutfitSection from "./components/OutfitSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090f] text-white">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px] animate-pulse"></div>

        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px] animate-pulse"></div>

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[160px] animate-pulse"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <h1 className="text-3xl font-extrabold">
            <span className="text-violet-500">Derma</span>match AI
          </h1>

          <nav className="hidden gap-8 md:flex">

            <a
              href="#"
              className="transition hover:text-violet-400"
            >
              Home
            </a>

            <a
              href="#features"
              className="transition hover:text-violet-400"
            >
              Features
            </a>

            <a
              href="#analysis"
              className="transition hover:text-violet-400"
            >
              Analysis
            </a>

            <a
              href="#outfits"
              className="transition hover:text-violet-400"
            >
              Outfits
            </a>

          </nav>

          <a
            href="#analysis"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(124,58,237,.6)]"
          >
            Get Started
          </a>

        </div>
      </header>

      {/* Main Content */}
      <main>

        <Hero />

        <Features />

        <AnalysisSection />

        <OutfitSection />

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-8 text-center text-slate-400">

          <h2 className="text-2xl font-bold">
            <span className="text-violet-500">Derma</span>match AI
          </h2>

          <p className="mt-3">
            AI-powered skin tone, face shape and fashion assistant.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            © 2026 Dermamatch AI. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}