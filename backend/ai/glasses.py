def recommend_glasses(face_shape):

    glasses = {

        "Oval": [
            "Wayfarer",
            "Aviator",
            "Square Frame"
        ],

        "Round": [
            "Rectangle",
            "Square",
            "Browline"
        ],

        "Square": [
            "Round",
            "Oval",
            "Aviator"
        ],

        "Oblong": [
            "Oversized",
            "Round",
            "Wayfarer"
        ]
    }

    return glasses.get(face_shape, ["Wayfarer"])