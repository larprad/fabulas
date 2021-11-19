import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { ListStorysQuery } from '../../graphql/API'
import { listStorys } from '../../graphql/queries'

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

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <div>
      <h2>Biblotheque page</h2>
      {stories && stories.listStorys?.items.map((story) => <li key={story.id}>{story.title}</li>)}
    </div>
  )
}

export default Biblotheque
