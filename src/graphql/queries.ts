/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      title
      description
      blocks {
        items {
          id
          title
          content
          storyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        title
        description
        blocks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
      id
      title
      content
      storyID
      story {
        id
        title
        description
        blocks {
          nextToken
        }
        createdAt
        updatedAt
      }
      choices {
        items {
          id
          blockID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        title
        content
        storyID
        story {
          id
          title
          description
          createdAt
          updatedAt
        }
        choices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChoice = /* GraphQL */ `
  query GetChoice($id: ID!) {
    getChoice(id: $id) {
      id
      blockID
      block {
        id
        title
        content
        storyID
        story {
          id
          title
          description
          createdAt
          updatedAt
        }
        choices {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
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
        blockID
        block {
          id
          title
          content
          storyID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
