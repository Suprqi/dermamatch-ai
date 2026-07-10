const API_URL = "https://dermamatch-ai.onrender.com";

export async function analyzeFace(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Server Error");
  }

  return await response.json();
}