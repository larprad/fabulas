export const getStory = /* GraphQL */ `
  query GetStory_custom($id: ID!) {
    getStory(id: $id) {
      id
      name
      description
      blocks {
        items {
          id
          name
          description
          storyID
          initial
          choices {
            items {
              id
              name
              blockID
              nextBlock {
                id
              }
            }
          }
        }
      }
    }
  }
`

export const listStorys = /* GraphQL */ `
  query ListStorys_custom($filter: ModelStoryFilterInput, $limit: Int, $nextToken: String) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        blocks {
          items {
            id
            name
            description
            storyID
            initial
          }
        }
      }
    }
  }
`
export const listBlocks = /* GraphQL */ `
  query ListBlocks_custom($filter: ModelBlockFilterInput, $limit: Int, $nextToken: String) {
    listBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        storyID
        initial
        choices {
          items {
            id
            name
            blockID
            nextBlock {
              id
            }
          }
        }
      }
    }
  }
`

export const getBlock = /* GraphQL */ `
  query GetBlock_custom($id: ID!) {
    getBlock(id: $id) {
      id
      name
      description
      storyID
      initial
      choices {
        items {
          id
          name
          blockID
          nextBlock {
            id
            name
            description
            storyID
            initial
          }
        }
      }
    }
  }
`
