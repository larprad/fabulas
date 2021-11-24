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
