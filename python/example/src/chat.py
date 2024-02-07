from llama_index.core.llms.types import ChatMessage
from llama_index.llms import Ollama

llm = Ollama(model="llama2")

response = llm.chat(messages=[ChatMessage(role="user", content="Hello, how are you?")])

print(response)
