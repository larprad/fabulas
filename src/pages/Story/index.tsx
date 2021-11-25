import { useGetStory } from '../../hooks/useDataQuery'
import { useParams } from 'react-router-dom'
import Heading from '../../component/Heading'

const Story = (): JSX.Element => {
  const { id = '' } = useParams()
  const variables = { id }
  const { data: story, isLoading, isError } = useGetStory(variables)

  if (isLoading) {
    return (
      <div className="text-center">
        <Heading title="Histoire" />
        <h3 className="text-xl py-3">Loading...</h3>
      </div>
    )
  }

  if (!story) {
    return (
      <div className="text-center">
        <Heading title="Histoire" />
        <h3 className="text-xl py-3">Oupsy ! Aucune histoires par ici...</h3>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center">
        <Heading title="Histoire" />
        <h3 className="text-xl text-red  py-3">Error!</h3>
      </div>
    )
  }

  const { name, description, blocks } = story

  return (
    <div className="text-center">
      <Heading title="Histoire" />
      <h3 className="text-xl py-3">{name}</h3>
      <p className="py-3">{description}</p>
      <p>Blocs :</p>
      <ul>
        {blocks?.items.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Story
