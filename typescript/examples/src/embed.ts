import { HuggingFaceEmbeddingModelType, HuggingFaceEmbedding } from 'llamaindex';
import { cosineSimilarity } from './utils/similarity';

const embedModel = new HuggingFaceEmbedding({
  modelType: HuggingFaceEmbeddingModelType.XENOVA_ALL_MINILM_L6_V2,
});

const response = await embedModel.getTextEmbedding('I like fast sport cars.');

console.log('response', response);

const ferrariEmbeddings = await embedModel.getTextEmbedding('A red ferrari.');
const toyotaEmbedding = await embedModel.getTextEmbedding('A slow toyota.');
const skyEmbedding = await embedModel.getTextEmbedding('The sky is blue.');

const ferrariSimilarity = cosineSimilarity(ferrariEmbeddings, response);
const toyotaSimilarity = cosineSimilarity(toyotaEmbedding, response);
const skySimilarity = cosineSimilarity(skyEmbedding, response);

console.log('ferrariSimilarity', ferrariSimilarity);
console.log('toyotaSimilarity', toyotaSimilarity);
console.log('skySimilarity', skySimilarity);
