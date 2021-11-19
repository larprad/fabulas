// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Story, Block, Choice } = initSchema(schema);

export {
  Story,
  Block,
  Choice
};