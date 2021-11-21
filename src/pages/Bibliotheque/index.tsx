import StoryCard from '../../component/StoryCard'
import { useGetStories } from '../../hooks/useDataQuery'

const Biblotheque = (): JSX.Element => {
  const { data, isLoading, isError } = useGetStories()

  const stories = data?.data

  if (isLoading) {
    return (
      <div>
        <h2 className="text-xl font-bold text-center py-3">Biblotheque</h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h2 className="text-xl font-bold text-center py-3">Biblotheque</h2>
        <p className="text-red">Error!</p>
      </div>
    )
  }

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
