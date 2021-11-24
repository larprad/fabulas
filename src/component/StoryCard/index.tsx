type Story = {
  name: string
  description?: string | null
}

const StoryCard = ({ name, description }: Story): JSX.Element => {
  return (
    <div className="shadow h-60 w-80 bg-gray-100 p-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default StoryCard
