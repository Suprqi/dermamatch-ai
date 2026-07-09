def recommend_hairstyle(face_shape):
    styles = {
        "Oval": [
            "French Crop",
            "Textured Quiff",
            "Pompadour",
            "Side Part"
        ],
        "Round": [
            "High Fade",
            "Quiff",
            "Undercut",
            "Spiky Hair"
        ],
        "Square": [
            "Buzz Cut",
            "Crew Cut",
            "Side Part",
            "Classic Taper"
        ],
        "Oblong": [
            "Fringe",
            "Caesar Cut",
            "Textured Crop",
            "Medium Length"
        ]
    }

    return styles.get(face_shape, ["Classic Cut"])