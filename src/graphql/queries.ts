/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
      id
      name
      description
      storyID
      _version
      _deleted
      _lastChangedAt
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
        name
        description
        storyID
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
`;
export const syncBlocks = /* GraphQL */ `
  query SyncBlocks(
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlocks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Blocks {
        nextToken
        startedAt
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
`;

export const syncStories = /* GraphQL */ `
  query SyncStories(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
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
`;
