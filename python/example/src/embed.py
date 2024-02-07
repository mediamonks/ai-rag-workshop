from llama_index.embeddings import HuggingFaceEmbedding

from utils.similarity import calculate_cosine_similarity

embedModel = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")

response = embedModel.get_text_embedding(text="I like fast sport cars.")

print(response)

ferrari_embeddings = embedModel.get_text_embedding(text="A red ferrari.")
toyota_embeddings = embedModel.get_text_embedding(text="A slow toyota.")
sky_embeddings = embedModel.get_text_embedding(text="The sky is blue.")

ferrari_distance = calculate_cosine_similarity(ferrari_embeddings, response)
toyota_distance = calculate_cosine_similarity(toyota_embeddings, response)
sky_distance = calculate_cosine_similarity(sky_embeddings, response)

print(ferrari_distance)
print(toyota_distance)
print(sky_distance)

