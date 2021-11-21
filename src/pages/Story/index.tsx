import { useGetStory } from '../../hooks/useDataQuery'
import { useParams } from 'react-router-dom'

const Story = (): JSX.Element => {
  const { id = '' } = useParams()
  const variables = { id }
  const { data, isLoading, isError } = useGetStory(variables)
  const story = data?.data.getStory

  if (isLoading) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold  pt-3 pb-6">Story</h2>
        <h3 className="text-xl py-3">Loading...</h3>
      </div>
    )
  }

  if (!story) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold  pt-3 pb-6">Story</h2>
        <h3 className="text-xl py-3">Oh Oh! Pas aucune histoires par ici...</h3>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold  pt-3 pb-6">Story</h2>
        <h3 className="text-xl text-red  py-3">Error!</h3>
      </div>
    )
  }

  const { name, description } = story

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold pt-3 pb-6">Story</h2>
      <h3 className="text-xl py-3">{name}</h3>
      <p className="py-3">{description}</p>
    </div>
  )
}

export default Story
