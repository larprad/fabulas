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
  
  return (
    <div>
      <h2>Biblotheque</h2>
      {stories?.listStorys?.items.map(story => <li key={story.id}>{story.name} : {story.description}</li>)}
    </div>
  )
}

export default Biblotheque