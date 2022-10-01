import { DefinitionsStack } from './lib/manifest-util.js';

const queue = new DefinitionsStack();

queue.addItem('1935470627', 'DestinyStatDefinition', {})
queue.process().catch(console.error)