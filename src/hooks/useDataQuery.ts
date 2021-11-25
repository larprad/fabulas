import { API, graphqlOperation } from 'aws-amplify'
import { useQuery } from 'react-query'
import { GetStoryQuery, Stories, Story, ListStoriesQuery, ListBlocksQuery, Blocks } from '../graphql/customQueryTypes'
import { GetStoryQueryVariables } from '../API'
import { getStory, listStorys, listBlocks } from '../graphql/customQueries'

export const useGetStories = (): { data: Stories; isError: boolean; isLoading: boolean } => {
  const response = async () => (await API.graphql(graphqlOperation(listStorys))) as { data: ListStoriesQuery }
  const query = useQuery<{ data: ListStoriesQuery }, Error>('stories', response)
  const { isLoading, isError } = query
  const refinedResult = { data: query.data?.data.listStorys, isLoading, isError }
  return refinedResult
}

export const useGetStory = (
  variables: GetStoryQueryVariables
): { data: Story; isError: boolean; isLoading: boolean } => {
  const response = async () => (await API.graphql(graphqlOperation(getStory, variables))) as { data: GetStoryQuery }
  const query = useQuery<{ data: GetStoryQuery }, Error>(['story', variables.id], response)
  const { isLoading, isError } = query
  const refinedResult = { data: query.data?.data.getStory, isLoading, isError }
  return refinedResult
}

export const useGetBlocks = (): { data: Blocks; isError: boolean; isLoading: boolean } => {
  const response = async () => (await API.graphql(graphqlOperation(listBlocks))) as { data: ListBlocksQuery }
  const query = useQuery<{ data: ListBlocksQuery }, Error>(['blocks'], response)
  const { isLoading, isError } = query
  const refinedResult = { data: query.data?.data.listBlocks, isLoading, isError }
  return refinedResult
}
