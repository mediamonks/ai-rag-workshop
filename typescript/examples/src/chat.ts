import { Ollama } from 'llamaindex';

const llm = new Ollama({
  model: process.env.MODEL || 'llama2',
});

const response = await llm.chat({
  messages: [
    {
      role: 'user',
      content: 'Hello, how are you?',
    },
  ],
});

console.log(response);
