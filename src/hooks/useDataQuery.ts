import { API, graphqlOperation } from 'aws-amplify'
import { useQuery, UseQueryResult } from 'react-query'
import { GetStoryQuery, GetStoryQueryVariables, ListStorysQuery } from '../API'
import { getStory, listStorys } from '../graphql/queries'

export const useGetStories = (): UseQueryResult<{
  data: ListStorysQuery
}> => {
  const query = useQuery(
    'stories',
    async () => (await API.graphql(graphqlOperation(listStorys))) as { data: ListStorysQuery }
  )
  return query
}

export const useGetStory = (
  variables: GetStoryQueryVariables
): UseQueryResult<{
  data: GetStoryQuery
}> => {
  const query = useQuery(
    'story',
    async () =>
      (await API.graphql(graphqlOperation(getStory, variables))) as {
        data: GetStoryQuery
      }
  )
  return query
}
