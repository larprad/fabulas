// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Choice, Block, Story } = initSchema(schema);

export {
  Choice,
  Block,
  Story
};