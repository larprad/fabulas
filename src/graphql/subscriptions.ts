/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChoice = /* GraphQL */ `
  subscription OnCreateChoice {
    onCreateChoice {
      id
      name
      blockID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      nextBlock {
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
            name
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
  }
`;
export const onUpdateChoice = /* GraphQL */ `
  subscription OnUpdateChoice {
    onUpdateChoice {
      id
      name
      blockID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      nextBlock {
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
            name
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
  }
`;
export const onDeleteChoice = /* GraphQL */ `
  subscription OnDeleteChoice {
    onDeleteChoice {
      id
      name
      blockID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      nextBlock {
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
            name
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
  }
`;
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock {
    onCreateBlock {
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
          name
          blockID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          nextBlock {
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
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      choices {
        items {
          id
          name
          blockID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          nextBlock {
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
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      choices {
        items {
          id
          name
          blockID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          nextBlock {
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
        nextToken
        startedAt
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
