import { Story } from '../../API'

type Props = Partial<Story>

const StoryCard = ({ name, description, blocks }: Props): JSX.Element => {
  return (
    <div className="shadow h-60 w-80 bg-gray-100 p-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
      <p>Blocks: {blocks?.items.length}</p>
    </div>
  )
}

export default StoryCard
