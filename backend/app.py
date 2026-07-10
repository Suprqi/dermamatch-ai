from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

from ai.face_detector import detect_face
from ai.skin_tone import analyze_skin

app = FastAPI(
    title="Dermamatch AI API",
    description="AI Face Analysis API",
    version="2.0.0"
)

# ==========================
# CORS
# ==========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # أثناء التطوير، وبعد النشر استبدله برابط Vercel
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Folders
# ==========================

UPLOAD_FOLDER = "uploads"
FACE_FOLDER = "ai/faces"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(FACE_FOLDER, exist_ok=True)

# ==========================
# Home
# ==========================

@app.get("/")
async def root():
    return {
        "status": "online",
        "project": "Dermamatch AI",
        "version": "2.0.0"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }

# ==========================
# Upload
# ==========================

@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    try:

        filepath = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # استخراج الوجه
        face_path = detect_face(filepath)

        if face_path is None:
            return {
                "success": False,
                "message": "No face detected."
            }

        # تحليل لون البشرة
        skin = analyze_skin(face_path)

        # مؤقتاً حتى نبني محلل شكل الوجه الحقيقي
        face_shape = "Oval"

        # توصيات مؤقتة
        recommendations = {

            "outfits": [

                {
                    "name": "Old Money",
                    "image": "/outfits/male/old-money.jpg"
                },

                {
                    "name": "Smart Casual",
                    "image": "/outfits/male/smart-casual.jpg"
                },

                {
                    "name": "Minimal",
                    "image": "/outfits/male/minimal.jpg"
                }

            ],

            "hairstyles": [

                {
                    "name": "Textured Crop",
                    "image": "/hairstyles/male/textured-crop.jpg"
                },

                {
                    "name": "Side Part",
                    "image": "/hairstyles/male/side-part.jpg"
                },

                {
                    "name": "Quiff",
                    "image": "/hairstyles/male/quiff.jpg"
                }

            ],

            "glasses": [

                {
                    "name": "Wayfarer",
                    "image": "/glasses/wayfarer.jpg"
                },

                {
                    "name": "Round",
                    "image": "/glasses/round.jpg"
                },

                {
                    "name": "Rectangle",
                    "image": "/glasses/rectangle.jpg"
                }

            ]

        }

        return {

            "success": True,

            "filename": file.filename,

            "face_path": face_path,

            "skin_analysis": skin,

            "face_shape": face_shape,

            "recommendations": recommendations

        }

    except Exception as e:

        return {

            "success": False,

            "error": str(e)

        }