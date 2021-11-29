/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChoice = /* GraphQL */ `
  query GetChoice($id: ID!) {
    getChoice(id: $id) {
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
export const listChoices = /* GraphQL */ `
  query ListChoices(
    $filter: ModelChoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          choices {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
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
export const listBlocks = /* GraphQL */ `
  query ListBlocks(
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
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
export const listStorys = /* GraphQL */ `
  query ListStorys(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
