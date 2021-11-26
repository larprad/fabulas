import { useForm } from 'react-hook-form'

import Heading from '../../component/Heading'
import { useCreateStory } from '../../hooks/useDataMutation'

type formData = {
  name: string
  description: string
}

const Creation = (): JSX.Element => {
  const defaultFormData = {
    name: '',
    description: '',
  }
  const { handleSubmit, register, reset } = useForm({ defaultValues: defaultFormData })
  const { mutate, isLoading } = useCreateStory()

  const onSubmit = (data: formData) => {
    mutate(data, {
      onError: (error) => console.error(error),
      onSuccess: () => reset(),
    })
  }
  const onReset = () => {
    reset()
  }

  return (
    <div>
      <Heading title="Création" />
      <h4 className="pb-3">Créez une nouvelle histoire</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          disabled={isLoading}
          placeholder="Pas trop long mais accrocheur"
          id="name"
          {...register('name', { required: true })}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          disabled={isLoading}
          placeholder="Une accroche rapide mais éfficace"
          id="description"
          {...register('description', { required: true })}
        />
        <div className="flex gap-3">
          <button type="submit" className="flex-1">
            Sauvegarder
          </button>
          <button onClick={onReset} className="flex-1">
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}
export default Creation
