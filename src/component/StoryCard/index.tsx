import { Link } from 'react-router-dom'
import { Story } from '../../API'
import { ROUTES } from '../../constants'

type Props = Partial<Story>

const StoryCard = ({ name, description, blocks, id }: Props): JSX.Element => {
  return (
    <div className="shadow h-60 w-80 bg-gray-100 p-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
      <p>Blocks: {blocks?.items.length}</p>
      <Link to={ROUTES.STORY + id}>Check story</Link>
    </div>
  )
}

export default StoryCard
