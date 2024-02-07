import os

from llama_index import SimpleDirectoryReader, StorageContext, ServiceContext, VectorStoreIndex
from llama_index.embeddings import HuggingFaceEmbedding

from utils.constants import STORAGE_DIR, STORAGE_CACHE_DIR, CHUNK_SIZE, CHUNK_OVERLAP

reader = SimpleDirectoryReader(input_dir=STORAGE_DIR)

documents = reader.load_data()

print(f"Loaded {len(documents)} documents.")

embedModel = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")

service_context = ServiceContext.from_defaults(
    chunk_size=CHUNK_SIZE,
    chunk_overlap=CHUNK_OVERLAP,
    embed_model=embedModel,
    llm=None,
)

print('Generating storage context...')

if os.path.exists(STORAGE_CACHE_DIR):
    storage_context = StorageContext.from_defaults(
        persist_dir=STORAGE_CACHE_DIR
    )

    index = VectorStoreIndex.from_documents(
        documents=documents,
        storage_context=storage_context,
        service_context=service_context
    )
else:
    index = VectorStoreIndex.from_documents(
        documents=documents,
        service_context=service_context
    )

    index.storage_context.persist(persist_dir=STORAGE_CACHE_DIR)

print('Storage context successfully generated.');