import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

type Story = {
  name: string
  description?: string | null
  id: string
}

const StoryCard = ({ name, description, id }: Story): JSX.Element => {
  return (
    <div className="shadow rounded h-60 w-80 bg-gray-500 p-3 text-center">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={ROUTES.STORY + id}>
        <p className="m-3 p-3 rouded bg-gray-700">Check story</p>
      </Link>
    </div>
  )
}

export default StoryCard
