import {useState, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listStorys } from '../../graphql/queries';
import { ListStorysQuery } from '../../API';

const Biblotheque = (): JSX.Element => {
  const [stories, setStories] = useState<ListStorysQuery | undefined>(undefined)

  async function fetchStories() {
    try {
      const apiData = (await API.graphql(graphqlOperation(listStorys))) as { data: ListStorysQuery }
      setStories(apiData.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {fetchStories()}, [])
  console.log(stories)
  return (
    <div>
      <h2>Biblotheque page</h2>
    </div>
  )
}

export default Biblotheque
