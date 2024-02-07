from llama_index import SimpleDirectoryReader

from utils.constants import STORAGE_DIR

reader = SimpleDirectoryReader(input_dir=STORAGE_DIR)

documents = reader.load_data()

print(f"Loaded {len(documents)} documents.")
