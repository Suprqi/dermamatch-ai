from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

from ai.face_detector import detect_face
from ai.skin_tone import analyze_skin

app = FastAPI(
    title="Dermamatch AI API",
    description="AI Face Analysis API",
    version="1.0.0"
)

# يسمح للواجهة الأمامية بالاتصال بالـ API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # React أثناء التطوير
        "*"                       # مؤقتاً، وبعد النشر سنضع رابط Vercel فقط
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# إنشاء المجلدات إذا لم تكن موجودة
UPLOAD_FOLDER = "uploads"
FACE_FOLDER = "ai/faces"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(FACE_FOLDER, exist_ok=True)


# الصفحة الرئيسية
@app.get("/")
async def root():
    return {
        "status": "online",
        "project": "Dermamatch AI",
        "version": "1.0.0",
        "message": "Backend is running successfully."
    }


# فحص حالة السيرفر
@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }


# رفع الصورة وتحليلها
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

        # تحليل البشرة
        skin = analyze_skin(face_path)

        return {
            "success": True,
            "filename": file.filename,
            "face_path": face_path,
            "skin_analysis": skin
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }