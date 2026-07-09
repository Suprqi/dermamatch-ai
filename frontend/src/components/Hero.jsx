import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            AI Powered Fashion Assistant
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight">
            Know Your
            <span className="text-violet-500"> Skin.</span>
            <br />
            Own Your
            <span className="text-blue-500"> Style.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Upload your photo and let Dermamatch AI analyze your skin tone,
            undertone, face shape and recommend colors and outfits designed
            specifically for you.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#analysis"
              className="rounded-xl bg-violet-600 px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,.6)]"
            >
              Start Analysis
            </a>

            <a
              href="#features"
              className="rounded-xl border border-white/10 px-8 py-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/10"
            >
              Learn More
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            rotateX: 8,
            rotateY: -8,
            y: -10,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="flex justify-center"
        >

          <div className="flex h-[520px] w-[450px] cursor-pointer items-center justify-center rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

            <div
              className="text-center"
              style={{
                transform: "translateZ(40px)",
              }}
            >

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="text-8xl"
              >
                🤖
              </motion.div>

              <h2 className="mt-6 text-3xl font-bold">
                Dermamatch AI
              </h2>

              <p className="mt-3 text-slate-400">
                AI Face Analysis Preview
              </p>

              <div className="mt-10 space-y-4">

                <div className="rounded-xl bg-slate-800/60 px-5 py-3">
                  🎨 Skin Tone
                </div>

                <div className="rounded-xl bg-slate-800/60 px-5 py-3">
                  🌡 Undertone
                </div>

                <div className="rounded-xl bg-slate-800/60 px-5 py-3">
                  👤 Face Shape
                </div>

                <div className="rounded-xl bg-slate-800/60 px-5 py-3">
                  👔 Style Match
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}