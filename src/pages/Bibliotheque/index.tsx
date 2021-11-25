import Heading from '../../component/Heading'
import StoryCard from '../../component/StoryCard'
import { useGetStories } from '../../hooks/useDataQuery'

const Biblotheque = (): JSX.Element => {
  const { data: stories, isLoading, isError } = useGetStories()

  if (isLoading) {
    return (
      <div>
        <Heading title="Biblotheque" />
        <p>Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <Heading title="Biblotheque" />
        <p className="text-red">Error!</p>
      </div>
    )
  }

  return (
    <div>
      <Heading title="Biblotheque" />
      <div className="flex flex-wrap gap-3">
        {stories?.items.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  )
}

export default Biblotheque
