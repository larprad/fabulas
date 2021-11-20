import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Story {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}