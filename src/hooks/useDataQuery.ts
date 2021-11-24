import { API, graphqlOperation } from 'aws-amplify'
import { useQuery, UseQueryResult } from 'react-query'
import { GetStoryQuery, ListStorysQuery } from '../graphql/customQueryTypes'
import { GetStoryQueryVariables } from '../API'
import { getStory, listStorys } from '../graphql/customQueries'

export const useGetStories = (): UseQueryResult<{ listStorys: ListStorysQuery }> => {
  const query = useQuery(
    'stories',
    async () => (await API.graphql(graphqlOperation(listStorys))) as { listStorys: ListStorysQuery }
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
