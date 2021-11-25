import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

type Story = {
  name: string
  description?: string | null
  id: string
}

const StoryCard = ({ name, description, id }: Story): JSX.Element => {
  return (
    <div className="shadow h-60 w-80 bg-gray-100 p-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
      <Link to={ROUTES.STORY + id}>Check story</Link>
    </div>
  )
}

export default StoryCard
