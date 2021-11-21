import { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listStorys } from '../../graphql/queries'
import { ListStorysQuery } from '../../API'
import StoryCard from '../StoryCard'

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
      <h2 className="text-xl font-bold text-center py-3">Biblotheque</h2>
      <div className="flex gap-3">
        {stories?.listStorys?.items.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  )
}

export default Biblotheque
