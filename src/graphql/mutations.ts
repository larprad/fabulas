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
      nam
      blockID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      nam
      blockID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      nam
      blockID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      choices {
        items {
          id
          nam
          blockID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      choices {
        items {
          id
          nam
          blockID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      choices {
        items {
          id
          nam
          blockID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      blocks {
        items {
          id
          name
          description
          storyID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          choices {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      blocks {
        items {
          id
          name
          description
          storyID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          choices {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      blocks {
        items {
          id
          name
          description
          storyID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          choices {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
