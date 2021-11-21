import { Story } from '../../API'

type Props = Partial<Story>

const StoryCard = ({ name, description, Blocks }: Props): JSX.Element => {
  return (
    <div className="shadow h-40 w-40 bg-gray-100 p-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
      {Blocks && <p>it gets blocks</p>}
    </div>
  )
}

export default StoryCard
