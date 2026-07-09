import { useState } from "react";
import { analyzeFace } from "../services/api";

export default function UploadZone({ onResult }) {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFile(e) {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleAnalyze() {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeFace(selectedFile);

      onResult(result);

      console.log(result);

    } catch (err) {
      console.error(err);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">

      <label
        htmlFor="photo"
        className="flex h-72 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-violet-500 transition hover:border-violet-400"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="text-6xl">📷</div>

            <p className="mt-4 text-slate-300">
              Click to upload your photo
            </p>

            <span className="text-slate-500">
              JPG • PNG • WEBP
            </span>
          </div>
        )}
      </label>

      <input
        id="photo"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-violet-600 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:bg-violet-500 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Face"}
      </button>

    </div>
  );
}