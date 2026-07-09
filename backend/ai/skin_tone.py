import cv2
import numpy as np


def analyze_skin(face_path):
    image = cv2.imread(face_path)

    if image is None:
        return None

    h, w, _ = image.shape

    crop = image[
        int(h * 0.30):int(h * 0.70),
        int(w * 0.30):int(w * 0.70)
    ]

    average = crop.mean(axis=(0, 1))

    b, g, r = average

    brightness = (r + g + b) / 3

    if brightness > 200:
        tone = "Very Fair"
    elif brightness > 170:
        tone = "Fair"
    elif brightness > 140:
        tone = "Light Medium"
    elif brightness > 110:
        tone = "Medium"
    elif brightness > 80:
        tone = "Tan"
    else:
        tone = "Deep"

    # تقدير بسيط للـ Undertone
    if r > b + 15:
        undertone = "Warm"
    elif b > r + 15:
        undertone = "Cool"
    else:
        undertone = "Neutral"

    # اقتراح الألوان
    recommendations = {
        "Warm": [
            "Olive",
            "Cream",
            "Brown",
            "Camel",
            "Gold"
        ],
        "Cool": [
            "Navy",
            "Gray",
            "Black",
            "White",
            "Silver"
        ],
        "Neutral": [
            "Beige",
            "White",
            "Black",
            "Navy",
            "Olive"
        ]
    }

    return {
        "skin_tone": tone,
        "undertone": undertone,
        "average_color": {
            "r": int(r),
            "g": int(g),
            "b": int(b)
        },
        "recommended_colors": recommendations[undertone],
        "confidence": 95
    }