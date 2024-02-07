import { SimpleDirectoryReader } from 'llamaindex';
import { STORAGE_DIR } from './utils/constants';

const documents = await new SimpleDirectoryReader().loadData(STORAGE_DIR);

console.log(`Loaded ${documents.length} documents.`);
// console.log(documents);
