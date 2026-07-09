export default function Features() {
  const features = [
    {
      icon: "🎨",
      title: "Skin Tone Analysis",
      desc: "Detect your skin tone using AI."
    },
    {
      icon: "😊",
      title: "Face Shape",
      desc: "Analyze your face shape accurately."
    },
    {
      icon: "👔",
      title: "Outfit Recommendation",
      desc: "Find clothes that match your appearance."
    },
    {
      icon: "💇",
      title: "Hairstyle",
      desc: "Discover hairstyles that suit your face."
    },
    {
      icon: "🕶️",
      title: "Accessories",
      desc: "Glasses and accessories recommendations."
    },
    {
      icon: "🤖",
      title: "AI Powered",
      desc: "Powered by advanced AI analysis."
    }
  ];

  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          Features
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-5 text-slate-400">
          AI technology that helps you discover your perfect look.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-violet-500 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(124,58,237,.3)]"
          >
            <div className="text-5xl transition duration-300 group-hover:scale-110">
              {feature.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}