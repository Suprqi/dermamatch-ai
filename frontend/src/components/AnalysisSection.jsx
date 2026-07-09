import { useState } from "react";
import UploadZone from "./UploadZone";

export default function AnalysisSection() {
  const [result, setResult] = useState(null);

  return (
    <section id="analysis" className="mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          AI Analysis
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Analyze Your Face
        </h2>

        <p className="mt-5 text-slate-400">
          Upload your photo and discover your perfect style.
        </p>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">

        <UploadZone onResult={setResult} />

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <h2 className="mb-8 text-3xl font-bold">
            Result
          </h2>

          <Card title="Skin Tone" value={result?.skin_analysis?.skin_tone} />

          <Card title="Undertone" value={result?.skin_analysis?.undertone} />

          <Card title="Face Shape" value={result?.face_shape?.shape} />

          <Card title="Style" value={result?.style?.style} />

          <div className="mt-8">

            <h3 className="mb-4 text-xl font-bold">
              Recommended Colors
            </h3>

            <div className="flex flex-wrap gap-3">

              {result?.style?.colors?.map((color) => (
                <div
                  key={color}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2"
                >
                  {color}
                </div>
              ))}

            </div>

          </div>

          <div className="mt-10">

            <h3 className="mb-4 text-xl font-bold">
              Hairstyles
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {result?.hairstyles?.map((hair) => (
                <div
                  key={hair}
                  className="rounded-xl bg-slate-800 p-3 text-center transition hover:bg-violet-600"
                >
                  💇 {hair}
                </div>
              ))}

            </div>

          </div>

          <div className="mt-10">

            <h3 className="mb-4 text-xl font-bold">
              Glasses
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {result?.glasses?.map((glass) => (
                <div
                  key={glass}
                  className="rounded-xl bg-slate-800 p-3 text-center transition hover:bg-violet-600"
                >
                  🕶 {glass}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 px-5 py-4">

      <span className="text-slate-400">
        {title}
      </span>

      <span className="font-bold">
        {value || "Waiting..."}
      </span>

    </div>
  );
}