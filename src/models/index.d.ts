import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BlockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Block {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly storyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Block, BlockMetaData>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block, BlockMetaData>) => MutableModel<Block, BlockMetaData> | void): Block;
}

export declare class Story {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly Blocks?: (Block | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}