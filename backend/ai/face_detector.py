import cv2
import os

FACE_FOLDER = "ai/faces"
os.makedirs(FACE_FOLDER, exist_ok=True)

cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)


def detect_face(image_path):
    image = cv2.imread(image_path)

    if image is None:
        return None

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    faces = cascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(100, 100)
    )

    if len(faces) == 0:
        return None

    x, y, w, h = faces[0]

    face = image[y:y+h, x:x+w]

    save_path = os.path.join(FACE_FOLDER, "face.jpg")
    cv2.imwrite(save_path, face)

    return save_path