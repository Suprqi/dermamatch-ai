from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

from ai.face_detector import detect_face
from ai.skin_tone import analyze_skin
from ai.face_shape import detect_face_shape
from ai.style_matcher import recommend_style
from ai.hairstyle import recommend_hairstyle
from ai.glasses import recommend_glasses

app = FastAPI(title="Dermamatch AI")


# ==========================
# CORS
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================
# Upload Folder
# ==========================
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# ==========================
# Home
# ==========================
@app.get("/")
def home():
    return {
        "project": "Dermamatch AI",
        "version": "1.0",
        "status": "Running"
    }


# ==========================
# Upload & Analyze
# ==========================
@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    try:

        # حفظ الصورة
        filepath = os.path.join(
            UPLOAD_FOLDER,
            file.filename
        )

        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # -----------------------------
        # Face Detection
        # -----------------------------
        face_path = detect_face(filepath)

        if face_path is None:
            return {
                "success": False,
                "message": "No face detected."
            }

        # -----------------------------
        # Skin Analysis
        # -----------------------------
        skin = analyze_skin(face_path)

        if skin is None:
            return {
                "success": False,
                "message": "Skin analysis failed."
            }

        # -----------------------------
        # Face Shape
        # -----------------------------
        face_shape = detect_face_shape(face_path)

        # -----------------------------
        # Style Recommendation
        # -----------------------------
        style = recommend_style(
            skin["skin_tone"],
            skin["undertone"]
        )

        # -----------------------------
        # Hairstyle Recommendation
        # -----------------------------
        hairstyles = recommend_hairstyle(
            face_shape["shape"]
        )

        # -----------------------------
        # Glasses Recommendation
        # -----------------------------
        glasses = recommend_glasses(
            face_shape["shape"]
        )

        # -----------------------------
        # Final Response
        # -----------------------------
        return {

            "success": True,

            "filename": file.filename,

            "image_path": filepath,

            "face_path": face_path,

            "skin_analysis": skin,

            "face_shape": face_shape,

            "style": style,

            "hairstyles": hairstyles,

            "glasses": glasses

        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }