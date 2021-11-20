/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelStoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Story = {
  __typename: "Story",
  id: string,
  name: string,
  description?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteStoryInput = {
  id: string,
  _version?: number | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStorysQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStorysQuery = {
  listStorys?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      name: string,
      description?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoriesQuery = {
  syncStories?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      name: string,
      description?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
