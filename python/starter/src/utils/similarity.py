# calculates the cosine distance between two vectors
import math


def calculate_cosine_similarity(first, second):
    dot_product = sum([a * b for a, b in zip(first, second)])
    magnitude_first = math.sqrt(sum([a**2 for a in first]))
    magnitude_second = math.sqrt(sum([a**2 for a in second]))

    return dot_product / (magnitude_first * magnitude_second)