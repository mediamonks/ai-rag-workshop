import {
  HuggingFaceEmbedding,
  HuggingFaceEmbeddingModelType,
  serviceContextFromDefaults,
  SimpleDirectoryReader,
  storageContextFromDefaults,
  VectorStoreIndex,
} from 'llamaindex';
import { CHUNK_OVERLAP, CHUNK_SIZE, STORAGE_CACHE_DIR, STORAGE_DIR } from './utils/constants';

const documents = await new SimpleDirectoryReader().loadData(STORAGE_DIR);

console.log(`Loaded ${documents.length} documents.`);

const storageContext = await storageContextFromDefaults({
  persistDir: STORAGE_CACHE_DIR,
});

const embedModel = new HuggingFaceEmbedding({
  modelType: HuggingFaceEmbeddingModelType.XENOVA_ALL_MINILM_L6_V2,
});

const serviceContext = serviceContextFromDefaults({
  chunkSize: CHUNK_SIZE,
  chunkOverlap: CHUNK_OVERLAP,
  embedModel,
  llm: 1 as any, // unused
});

console.log(`Generating storage context...`);

await VectorStoreIndex.fromDocuments(documents, {
  storageContext,
  serviceContext,
});

console.log('Storage context successfully generated.');
