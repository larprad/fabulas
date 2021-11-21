import { API, graphqlOperation } from 'aws-amplify'
import { useQuery, UseQueryResult } from 'react-query'
import { ListStorysQuery } from '../API'
import { listStorys } from '../graphql/queries'

export const useGetStories = (): UseQueryResult<{
  data: ListStorysQuery
}> => {
  const query = useQuery(
    'stories',
    async () => (await API.graphql(graphqlOperation(listStorys))) as { data: ListStorysQuery }
  )
  return query
}
