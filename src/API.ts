/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
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
  createdAt: string,
  updatedAt: string,
  blocks?: ModelBlockConnection | null,
};

export type ModelBlockConnection = {
  __typename: "ModelBlockConnection",
  items:  Array<Block >,
  nextToken?: string | null,
};

export type Block = {
  __typename: "Block",
  id: string,
  name?: string | null,
  description?: string | null,
  storyID?: string | null,
  initial?: boolean | null,
  createdAt: string,
  updatedAt: string,
  choices?: ModelChoiceConnection | null,
};

export type ModelChoiceConnection = {
  __typename: "ModelChoiceConnection",
  items:  Array<Choice >,
  nextToken?: string | null,
};

export type Choice = {
  __typename: "Choice",
  id: string,
  name?: string | null,
  blockID?: string | null,
  createdAt: string,
  updatedAt: string,
  nextBlock?: Block | null,
};

export type DeleteStoryInput = {
  id: string,
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
};

export type ModelBlockFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  storyID?: ModelIDInput | null,
  initial?: ModelBooleanInput | null,
  and?: Array< ModelBlockFilterInput | null > | null,
  or?: Array< ModelBlockFilterInput | null > | null,
  not?: ModelBlockFilterInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CreateChoiceInput = {
  id?: string | null,
  name?: string | null,
  blockID?: string | null,
  choiceNextBlockId?: string | null,
};

export type ModelChoiceConditionInput = {
  name?: ModelStringInput | null,
  blockID?: ModelIDInput | null,
  and?: Array< ModelChoiceConditionInput | null > | null,
  or?: Array< ModelChoiceConditionInput | null > | null,
  not?: ModelChoiceConditionInput | null,
};

export type UpdateChoiceInput = {
  id: string,
  name?: string | null,
  blockID?: string | null,
  choiceNextBlockId?: string | null,
};

export type DeleteChoiceInput = {
  id: string,
};

export type CreateBlockInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  storyID?: string | null,
  initial?: boolean | null,
};

export type ModelBlockConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  storyID?: ModelIDInput | null,
  initial?: ModelBooleanInput | null,
  and?: Array< ModelBlockConditionInput | null > | null,
  or?: Array< ModelBlockConditionInput | null > | null,
  not?: ModelBlockConditionInput | null,
};

export type UpdateBlockInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  storyID?: string | null,
  initial?: boolean | null,
};

export type DeleteBlockInput = {
  id: string,
};

export type UpdateStoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type ModelChoiceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  blockID?: ModelIDInput | null,
  and?: Array< ModelChoiceFilterInput | null > | null,
  or?: Array< ModelChoiceFilterInput | null > | null,
  not?: ModelChoiceFilterInput | null,
};

export type CreateStory_customMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStory_customMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
  } | null,
};

export type DeleteStory_customMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStory_customMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    name: string,
  } | null,
};

export type GetStory_customQueryVariables = {
  id: string,
};

export type GetStory_customQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        choices?:  {
          __typename: "ModelChoiceConnection",
          items:  Array< {
            __typename: "Choice",
            id: string,
            name?: string | null,
            blockID?: string | null,
            nextBlock?:  {
              __typename: "Block",
              id: string,
            } | null,
          } >,
        } | null,
      } >,
    } | null,
  } | null,
};

export type ListStorys_customQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStorys_customQuery = {
  listStorys?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      name: string,
      description?: string | null,
      blocks?:  {
        __typename: "ModelBlockConnection",
        items:  Array< {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
        } >,
      } | null,
    } >,
  } | null,
};

export type ListBlocks_customQueryVariables = {
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlocks_customQuery = {
  listBlocks?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          nextBlock?:  {
            __typename: "Block",
            id: string,
          } | null,
        } >,
      } | null,
    } >,
  } | null,
};

export type GetBlock_customQueryVariables = {
  id: string,
};

export type GetBlock_customQuery = {
  getBlock?:  {
    __typename: "Block",
    id: string,
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
        } | null,
      } >,
    } | null,
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
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
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
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
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
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
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
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
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
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
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
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
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
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetChoiceQueryVariables = {
  id: string,
};

export type GetChoiceQuery = {
  getChoice?:  {
    __typename: "Choice",
    id: string,
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
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
      name?: string | null,
      blockID?: string | null,
      createdAt: string,
      updatedAt: string,
      nextBlock?:  {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } | null,
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
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
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
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } >,
    nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
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
      createdAt: string,
      updatedAt: string,
      blocks?:  {
        __typename: "ModelBlockConnection",
        items:  Array< {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChoiceSubscription = {
  onCreateChoice?:  {
    __typename: "Choice",
    id: string,
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateChoiceSubscription = {
  onUpdateChoice?:  {
    __typename: "Choice",
    id: string,
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteChoiceSubscription = {
  onDeleteChoice?:  {
    __typename: "Choice",
    id: string,
    name?: string | null,
    blockID?: string | null,
    createdAt: string,
    updatedAt: string,
    nextBlock?:  {
      __typename: "Block",
      id: string,
      name?: string | null,
      description?: string | null,
      storyID?: string | null,
      initial?: boolean | null,
      createdAt: string,
      updatedAt: string,
      choices?:  {
        __typename: "ModelChoiceConnection",
        items:  Array< {
          __typename: "Choice",
          id: string,
          name?: string | null,
          blockID?: string | null,
          createdAt: string,
          updatedAt: string,
        } >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateBlockSubscription = {
  onCreateBlock?:  {
    __typename: "Block",
    id: string,
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBlockSubscription = {
  onUpdateBlock?:  {
    __typename: "Block",
    id: string,
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBlockSubscription = {
  onDeleteBlock?:  {
    __typename: "Block",
    id: string,
    name?: string | null,
    description?: string | null,
    storyID?: string | null,
    initial?: boolean | null,
    createdAt: string,
    updatedAt: string,
    choices?:  {
      __typename: "ModelChoiceConnection",
      items:  Array< {
        __typename: "Choice",
        id: string,
        name?: string | null,
        blockID?: string | null,
        createdAt: string,
        updatedAt: string,
        nextBlock?:  {
          __typename: "Block",
          id: string,
          name?: string | null,
          description?: string | null,
          storyID?: string | null,
          initial?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        id: string,
        name?: string | null,
        description?: string | null,
        storyID?: string | null,
        initial?: boolean | null,
        createdAt: string,
        updatedAt: string,
        choices?:  {
          __typename: "ModelChoiceConnection",
          nextToken?: string | null,
        } | null,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};
