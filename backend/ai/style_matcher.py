def recommend_style(skin_tone, undertone):

    if undertone == "Warm":

        return {
            "style": "Old Money",
            "colors": [
                "Olive",
                "Cream",
                "Camel",
                "Brown",
                "Beige"
            ]
        }

    elif undertone == "Cool":

        return {
            "style": "Minimal",
            "colors": [
                "Black",
                "White",
                "Gray",
                "Navy",
                "Silver"
            ]
        }

    else:

        return {
            "style": "Smart Casual",
            "colors": [
                "Black",
                "White",
                "Olive",
                "Navy",
                "Beige"
            ]
        }