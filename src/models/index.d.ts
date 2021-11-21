import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChoiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Choice {
  readonly id: string;
  readonly name?: string;
  readonly blockID?: string;
  readonly nextBlock?: Block;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Choice, ChoiceMetaData>);
  static copyOf(source: Choice, mutator: (draft: MutableModel<Choice, ChoiceMetaData>) => MutableModel<Choice, ChoiceMetaData> | void): Choice;
}

export declare class Block {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly storyID?: string;
  readonly choices?: (Choice | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Block, BlockMetaData>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block, BlockMetaData>) => MutableModel<Block, BlockMetaData> | void): Block;
}

export declare class Story {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly blocks?: (Block | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}