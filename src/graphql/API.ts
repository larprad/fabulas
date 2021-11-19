/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoryInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelStoryConditionInput = {
  title?: ModelStringInput | null,
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
  title: string,
  description?: string | null,
  blocks?: ModelBlockConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBlockConnection = {
  __typename: "ModelBlockConnection",
  items:  Array<Block >,
  nextToken?: string | null,
};

export type Block = {
  __typename: "Block",
  id: string,
  title: string,
  content?: string | null,
  storyID: string,
  story?: Story | null,
  choices?: ModelChoiceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChoiceConnection = {
  __typename: "ModelChoiceConnection",
  items:  Array<Choice >,
  nextToken?: string | null,
};

export type Choice = {
  __typename: "Choice",
  id: string,
  blockID: string,
  block?: Block | null,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStoryInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type CreateBlockInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  storyID: string,
};

export type ModelBlockConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  storyID?: ModelIDInput | null,
  and?: Array< ModelBlockConditionInput | null > | null,
  or?: Array< ModelBlockConditionInput | null > | null,
  not?: ModelBlockConditionInput | null,
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

export type UpdateBlockInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  storyID?: string | null,
};

export type DeleteBlockInput = {
  id: string,
};

export type CreateChoiceInput = {
  id?: string | null,
  blockID: string,
  content: string,
};

export type ModelChoiceConditionInput = {
  blockID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelChoiceConditionInput | null > | null,
  or?: Array< ModelChoiceConditionInput | null > | null,
  not?: ModelChoiceConditionInput | null,
};

export type UpdateChoiceInput = {
  id: string,
  blockID?: string | null,
  content?: string | null,
};

export type DeleteChoiceInput = {
  id: string,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story >,
  nextToken?: string | null,
};

export type ModelBlockFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  storyID?: ModelIDInput | null,
  and?: Array< ModelBlockFilterInput | null > | null,
  or?: Array< ModelBlockFilterInput | null > | null,
  not?: ModelBlockFilterInput | null,
};

export type ModelChoiceFilterInput = {
  id?: ModelIDInput | null,
  blockID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelChoiceFilterInput | null > | null,
  or?: Array< ModelChoiceFilterInput | null > | null,
  not?: ModelChoiceFilterInput | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
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
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
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
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlockMutationVariables = {
  input: CreateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type CreateBlockMutation = {
  createBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlockMutationVariables = {
  input: UpdateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type UpdateBlockMutation = {
  updateBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlockMutationVariables = {
  input: DeleteBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type DeleteBlockMutation = {
  deleteBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChoiceMutationVariables = {
  input: CreateChoiceInput,
  condition?: ModelChoiceConditionInput | null,
};

export type CreateChoiceMutation = {
  createChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChoiceMutationVariables = {
  input: UpdateChoiceInput,
  condition?: ModelChoiceConditionInput | null,
};

export type UpdateChoiceMutation = {
  updateChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChoiceMutationVariables = {
  input: DeleteChoiceInput,
  condition?: ModelChoiceConditionInput | null,
};

export type DeleteChoiceMutation = {
  deleteChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
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
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
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
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetBlockQueryVariables = {
  id: string,
};

export type GetBlockQuery = {
  getBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlocksQueryVariables = {
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlocksQuery = {
  listBlocks?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetChoiceQueryVariables = {
  id: string,
};

export type GetChoiceQuery = {
  getChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChoicesQueryVariables = {
  filter?: ModelChoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChoicesQuery = {
  listChoices?:  {
    __typename: "ModelChoiceConnection",
    items:  Array< {
      __typename: "Choice",
      id: string,
      blockID: string,
      block?:  {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        title: string,
        content?: string | null,
        storyID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlockSubscription = {
  onCreateBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlockSubscription = {
  onUpdateBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlockSubscription = {
  onDeleteBlock?:  {
    __typename: "Block",
    id: string,
    title: string,
    content?: string | null,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        blockID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChoiceSubscription = {
  onCreateChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChoiceSubscription = {
  onUpdateChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChoiceSubscription = {
  onDeleteChoice?:  {
    __typename: "Choice",
    id: string,
    blockID: string,
    block?:  {
      __typename: "Block",
      id: string,
      title: string,
      content?: string | null,
      storyID: string,
      story?:  {
        __typename: "Story",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
