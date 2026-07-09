import cv2
import mediapipe as mp
import math

mp_face_mesh = mp.solutions.face_mesh


def distance(p1, p2):
    return math.sqrt(
        (p1.x - p2.x) ** 2 +
        (p1.y - p2.y) ** 2
    )


def detect_face_shape(image_path):

    image = cv2.imread(image_path)

    if image is None:
        return {
            "shape": "Unknown",
            "confidence": 0
        }

    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    with mp_face_mesh.FaceMesh(
        static_image_mode=True,
        max_num_faces=1,
        refine_landmarks=True,
        min_detection_confidence=0.5
    ) as face_mesh:

        results = face_mesh.process(rgb)

        if not results.multi_face_landmarks:
            return {
                "shape": "Unknown",
                "confidence": 0
            }

        landmarks = results.multi_face_landmarks[0].landmark

        forehead = distance(landmarks[54], landmarks[284])

        cheekbones = distance(landmarks[234], landmarks[454])

        jaw = distance(landmarks[172], landmarks[397])

        face_length = distance(landmarks[10], landmarks[152])

        ratio = face_length / cheekbones

        if ratio > 1.55:
            shape = "Oblong"

        elif abs(forehead - cheekbones) < 0.03 and abs(jaw - cheekbones) < 0.03:
            shape = "Square"

        elif cheekbones > forehead and cheekbones > jaw:
            shape = "Diamond"

        elif ratio > 1.35:
            shape = "Oval"

        else:
            shape = "Round"

        return {
            "shape": shape,
            "confidence": 96
        }