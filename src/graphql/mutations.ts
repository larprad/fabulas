/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChoice = /* GraphQL */ `
  mutation CreateChoice(
    $input: CreateChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    createChoice(input: $input, condition: $condition) {
      id
      name
      blockID
      createdAt
      updatedAt
      nextBlock {
        id
        name
        description
        storyID
        initial
        createdAt
        updatedAt
        choices {
          items {
            id
            name
            blockID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const updateChoice = /* GraphQL */ `
  mutation UpdateChoice(
    $input: UpdateChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    updateChoice(input: $input, condition: $condition) {
      id
      name
      blockID
      createdAt
      updatedAt
      nextBlock {
        id
        name
        description
        storyID
        initial
        createdAt
        updatedAt
        choices {
          items {
            id
            name
            blockID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteChoice = /* GraphQL */ `
  mutation DeleteChoice(
    $input: DeleteChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    deleteChoice(input: $input, condition: $condition) {
      id
      name
      blockID
      createdAt
      updatedAt
      nextBlock {
        id
        name
        description
        storyID
        initial
        createdAt
        updatedAt
        choices {
          items {
            id
            name
            blockID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const createBlock = /* GraphQL */ `
  mutation CreateBlock(
    $input: CreateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    createBlock(input: $input, condition: $condition) {
      id
      name
      description
      storyID
      initial
      createdAt
      updatedAt
      choices {
        items {
          id
          name
          blockID
          createdAt
          updatedAt
          nextBlock {
            id
            name
            description
            storyID
            initial
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const updateBlock = /* GraphQL */ `
  mutation UpdateBlock(
    $input: UpdateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    updateBlock(input: $input, condition: $condition) {
      id
      name
      description
      storyID
      initial
      createdAt
      updatedAt
      choices {
        items {
          id
          name
          blockID
          createdAt
          updatedAt
          nextBlock {
            id
            name
            description
            storyID
            initial
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteBlock = /* GraphQL */ `
  mutation DeleteBlock(
    $input: DeleteBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    deleteBlock(input: $input, condition: $condition) {
      id
      name
      description
      storyID
      initial
      createdAt
      updatedAt
      choices {
        items {
          id
          name
          blockID
          createdAt
          updatedAt
          nextBlock {
            id
            name
            description
            storyID
            initial
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      blocks {
        items {
          id
          name
          description
          storyID
          initial
          createdAt
          updatedAt
          choices {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      blocks {
        items {
          id
          name
          description
          storyID
          initial
          createdAt
          updatedAt
          choices {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      blocks {
        items {
          id
          name
          description
          storyID
          initial
          createdAt
          updatedAt
          choices {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
