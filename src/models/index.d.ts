import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChoiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Story {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly blocks?: (Block | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}

export declare class Block {
  readonly id: string;
  readonly title: string;
  readonly content?: string;
  readonly story?: Story;
  readonly choices?: (Choice | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Block, BlockMetaData>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block, BlockMetaData>) => MutableModel<Block, BlockMetaData> | void): Block;
}

export declare class Choice {
  readonly id: string;
  readonly block?: Block;
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Choice, ChoiceMetaData>);
  static copyOf(source: Choice, mutator: (draft: MutableModel<Choice, ChoiceMetaData>) => MutableModel<Choice, ChoiceMetaData> | void): Choice;
}