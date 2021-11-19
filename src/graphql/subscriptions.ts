/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock {
    onCreateBlock {
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
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock {
    onUpdateBlock {
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
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock {
    onDeleteBlock {
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
export const onCreateChoice = /* GraphQL */ `
  subscription OnCreateChoice {
    onCreateChoice {
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
export const onUpdateChoice = /* GraphQL */ `
  subscription OnUpdateChoice {
    onUpdateChoice {
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
export const onDeleteChoice = /* GraphQL */ `
  subscription OnDeleteChoice {
    onDeleteChoice {
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
