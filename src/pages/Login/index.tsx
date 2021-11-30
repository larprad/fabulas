import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Heading from '../../component/Heading'
import { ROUTES } from '../../constants'
import { Auth } from 'aws-amplify'

type FormType = {
  username: string
  password: string
}

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const defaultFormData = {
    username: '',
    password: '',
  }
  const { handleSubmit, register, reset } = useForm<FormType>({ defaultValues: defaultFormData })
  const handleGoSubscribe = () => {
    navigate(ROUTES.SUBSCRIBE)
  }
  const handleLogin = ({ username, password }: FormType) => {
    Auth.signIn(username, password)
      .then((user) => console.log(user))
      .catch((error) => console.error(error))
  }
  const handleReset = () => {
    reset()
  }

  return (
    <div>
      <Heading title="Connexion" />
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-3">
        <label htmlFor="username">Email</label>
        <input type="text" id="username" {...register('username', { required: true })} />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" {...register('password', { required: true })} />
        <div className="flex gap-3 w-100">
          <button type="submit" className="flex-1">
            Connexion
          </button>
          <button onClick={handleReset} className="flex-1">
            Reset
          </button>
          <button onClick={handleGoSubscribe} className="flex-1">
            Inscription
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
