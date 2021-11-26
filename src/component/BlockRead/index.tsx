import { useState } from 'react'
import { Blocks } from '../../graphql/customQueryTypes'

type Props = { blocks: Blocks }

const BlockRead = ({ blocks }: Props): JSX.Element => {
  const initialBlock = blocks?.items.find((block) => block.initial)
  const [currentBlock, setCurrentBlock] = useState(initialBlock)

  const handleBlockChange = (blockId?: string | null) => {
    const newBlock = blocks?.items.find((block) => block.id === blockId)
    setCurrentBlock(newBlock)
  }

  if (!currentBlock) {
    return <div>No blocks found</div>
  }

  const { name, description, choices } = currentBlock
  return (
    <div className="border rounded p-3">
      <h5>{name}</h5>
      <p>{description}</p>
      <div className="my-3 flex gap-3 justify-center">
        {choices?.items.map((choice) => (
          <button key={choice.id} onClick={() => handleBlockChange(choice.nextBlock?.id)}>
            {choice.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BlockRead
