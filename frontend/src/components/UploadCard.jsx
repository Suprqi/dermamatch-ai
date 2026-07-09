export default function UploadCard() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

      <div className="mb-6 flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-violet-500">

        <p className="text-slate-400">
          Upload your photo
        </p>

      </div>

      <button className="w-full rounded-xl bg-violet-600 py-4 text-lg font-bold transition hover:bg-violet-500">
        Analyze Face
      </button>

    </div>
  );
}