import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Heading from '../../component/Heading'
import { ROUTES } from '../../constants'
import { useAuthContext } from '../../state/Auth/AuthContext'

type FormType = {
  username: string
  password: string
  nickname: string
}

const Subscribe = (): JSX.Element => {
  const navigate = useNavigate()
  const { signUp } = useAuthContext()
  const defaultFormData = {
    username: '',
    password: '',
    nickname: '',
  }

  const { handleSubmit, register, reset } = useForm<FormType>({ defaultValues: defaultFormData })
  const handleQuit = () => {
    navigate(ROUTES.HOME)
  }

  const handleSubscribe = ({ username, password, nickname }: FormType) => {
    signUp({ username, password, nickname })
  }

  const handleReset = () => {
    reset()
  }

  return (
    <div>
      <Heading title="Connexion" />
      <form onSubmit={handleSubmit(handleSubscribe)} className="flex flex-col gap-3">
        <label htmlFor="nickname">Pseudo</label>
        <input type="text" id="nickname" {...register('nickname', { required: true })} />
        <label htmlFor="username">Email</label>
        <input type="text" id="username" {...register('username', { required: true })} />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" {...register('password', { required: true })} />
        <div className="flex gap-3 w-100">
          <button type="submit" className="flex-1">
            Inscription
          </button>
          <button onClick={handleReset} className="flex-1">
            Reset
          </button>
          <button onClick={handleQuit} className="flex-1">
            Quitter
          </button>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
