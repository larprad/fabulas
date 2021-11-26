export const createStory = /* GraphQL */ `
  mutation CreateStory_custom($input: CreateStoryInput!, $condition: ModelStoryConditionInput) {
    createStory(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`
