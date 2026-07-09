import cv2
import mediapipe as mp
import os

mp_face = mp.solutions.face_detection

FACE_FOLDER = "ai/faces"
os.makedirs(FACE_FOLDER, exist_ok=True)


def detect_face(image_path):
    image = cv2.imread(image_path)

    if image is None:
        return None

    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    with mp_face.FaceDetection(
        model_selection=1,
        min_detection_confidence=0.5
    ) as detector:

        results = detector.process(rgb)

        if not results.detections:
            return None

        detection = results.detections[0]

        bbox = detection.location_data.relative_bounding_box

        h, w, _ = image.shape

        x = max(int(bbox.xmin * w), 0)
        y = max(int(bbox.ymin * h), 0)
        width = int(bbox.width * w)
        height = int(bbox.height * h)

        face = image[y:y + height, x:x + width]

        save_path = os.path.join(FACE_FOLDER, "face.jpg")
        cv2.imwrite(save_path, face)

        return save_path