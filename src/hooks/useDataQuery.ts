import { API, graphqlOperation } from 'aws-amplify'
import { useQuery } from 'react-query'
import { GetStoryQuery, ListStorysQuery } from '../graphql/customQueryTypes'
import { GetStoryQueryVariables } from '../API'
import { getStory, listStorys } from '../graphql/customQueries'

export const useGetStories = () => {
  const response = async () => (await API.graphql(graphqlOperation(listStorys))) as { data: ListStorysQuery }
  const query = useQuery<{ data: ListStorysQuery }, Error>('story', response)
  const { isLoading, isError } = query
  const refinedResult = { data: query.data?.data.listStorys, isLoading, isError }
  return refinedResult
}

export const useGetStory = (variables: GetStoryQueryVariables) => {
  const response = async () =>
    (await API.graphql(graphqlOperation(getStory, variables))) as {
      data: GetStoryQuery
    }

  const query = useQuery<{ data: GetStoryQuery }, Error>('story', response)
  const { isLoading, isError } = query
  const refinedResult = { data: query.data?.data.getStory, isLoading, isError }
  return refinedResult
}
