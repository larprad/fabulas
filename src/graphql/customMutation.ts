export const createStory = /* GraphQL */ `
  mutation CreateStory_custom($input: CreateStoryInput!, $condition: ModelStoryConditionInput) {
    createStory(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`

export const deleteStory = /* GraphQL */ `
  mutation DeleteStory_custom($input: DeleteStoryInput!, $condition: ModelStoryConditionInput) {
    deleteStory(input: $input, condition: $condition) {
      id
      name
    }
  }
`
