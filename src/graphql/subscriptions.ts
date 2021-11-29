/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChoice = /* GraphQL */ `
  subscription OnCreateChoice {
    onCreateChoice {
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
export const onUpdateChoice = /* GraphQL */ `
  subscription OnUpdateChoice {
    onUpdateChoice {
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
export const onDeleteChoice = /* GraphQL */ `
  subscription OnDeleteChoice {
    onDeleteChoice {
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
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock {
    onCreateBlock {
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
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock {
    onUpdateBlock {
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
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock {
    onDeleteBlock {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
