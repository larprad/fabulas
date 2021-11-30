import Auth from '@aws-amplify/auth'
import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setIsLoggedIn(true), setUserName(user.attributes.nickname)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const logout = () => {
    Auth.signOut()
    setUserName('')
    setIsLoggedIn(false)
  }

  const login = ({ email, password }: { email: string; password: string }) => {
    setLoading(true)
    Auth.signIn(email, password)
      .then((user) => {
        setUserName(user.attributes.nickname)
        setIsLoggedIn(true)
        Auth.userSession(user).catch((error) => console.error('session err', error))
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  const signUp = ({ username, password, nickname }: { username: string; password: string; nickname: string }) => {
    setLoading(true)
    Auth.signUp({ username, password, attributes: { nickname } })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  return <AuthContext.Provider value={{ logout, login, userName, isLoggedIn, loading, signUp }}>{children}</AuthContext.Provider>
}

export default AuthProvider
