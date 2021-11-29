import { API } from 'aws-amplify'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { CreateStoryInput, DeleteStoryInput } from '../API'
import { createStory, deleteStory } from '../graphql/customMutation'
import { CreateStoryMutation, DeleteStoryMutation } from '../graphql/customMutationTypes'

export const useCreateStory = (): UseMutationResult<{ data: CreateStoryMutation }, unknown, CreateStoryInput, unknown> => {
  const queryClient = useQueryClient()
  const response = async (story: CreateStoryInput) =>
    (await API.graphql({ query: createStory, variables: { input: story } })) as {
      data: CreateStoryMutation
    }
  const mutation = useMutation(response, {
    onSuccess: () => {
      queryClient.invalidateQueries('stories')
    },
    onError: (error) => console.error(error),
  })
  return mutation
}

export const useDeleteStory = (): UseMutationResult<{ data: DeleteStoryMutation }, unknown, DeleteStoryInput, unknown> => {
  const queryClient = useQueryClient()
  const response = async (story: DeleteStoryInput) =>
    (await API.graphql({ query: deleteStory, variables: { input: story } })) as {
      data: DeleteStoryMutation
    }
  const mutation = useMutation(response, {
    onSuccess: () => {
      queryClient.invalidateQueries('stories')
    },
    onError: (error) => console.error(error),
  })
  return mutation
}
