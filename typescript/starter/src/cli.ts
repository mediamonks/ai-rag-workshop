import prompts from 'prompts';

const response = await prompts({
  type: 'text',
  name: 'question',
  message: 'Ask me anything?',
  validate: (value) => (value.length < 2 ? `Enter something...` : true),
});

console.log(response);

// TODO: implement chat engine to respond to user input
