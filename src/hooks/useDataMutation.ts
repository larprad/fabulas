import { API, graphqlOperation } from 'aws-amplify'
import { useMutation, UseMutationResult } from 'react-query'
import { CreateStoryInput } from '../API'
import { createStory } from '../graphql/customMutation'
import { CreateStoryMutation } from '../graphql/customMutationTypes'

export const useCreateStory = (): UseMutationResult<{ data: CreateStoryMutation }, unknown, CreateStoryInput, unknown> => {
  const response = async (story: CreateStoryInput) =>
    (await API.graphql(graphqlOperation(createStory, { input: story }))) as {
      data: CreateStoryMutation
    }
  const mutation = useMutation(response)
  return mutation
}
