export default function OutfitSection() {
  const outfits = [
    {
      title: "Old Money",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
      colors: "Beige • White • Brown",
    },
    {
      title: "Minimal",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
      colors: "Black • White • Gray",
    },
    {
      title: "Smart Casual",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      colors: "Navy • Beige • Olive",
    },
  ];

  return (
    <section id="outfits" className="mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          Outfit Recommendation
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Your Perfect Style
        </h2>

        <p className="mt-5 text-slate-400">
          AI recommends fashion styles that match your face and skin tone.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {outfits.map((item) => (

          <div
            key={item.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-3 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,.4)]"
          >

            <img
              src={item.image}
              className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.colors}
              </p>

              <button className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-bold transition hover:bg-violet-500">
                View Outfit
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}