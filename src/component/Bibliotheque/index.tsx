import {useState, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listBlocks, listStorys } from '../../graphql/queries';
import { ListStorysQuery,ListBlocksQuery } from '../../API';

const Biblotheque = (): JSX.Element => {
  const [stories, setStories] = useState<ListStorysQuery | undefined>(undefined)
  const [blocks, setBlocks] = useState<ListBlocksQuery | undefined>(undefined)

  async function fetchStories() {
    try {
      const apiData = (await API.graphql(graphqlOperation(listStorys))) as { data: ListStorysQuery }
      setStories(apiData.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchBlocks() {
    try {
      const apiData = (await API.graphql(graphqlOperation(listBlocks))) as { data: ListBlocksQuery }
      setBlocks(apiData.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {fetchStories(), fetchBlocks()}, [])
  
  return (
    <div>
      <h2>Biblotheque</h2>
      <h3>Stories</h3>
      {stories?.listStorys?.items.map(story => <li key={story.id}>{story.name} : {story.description}</li>)}
      <h3>Blocks</h3>
      {blocks?.listBlocks?.items.map(block => <li key={block.id}>{block.name} : {block.description}</li>)}
    </div>
  )
}

export default Biblotheque