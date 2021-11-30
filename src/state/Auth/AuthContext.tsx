import { createContext, useContext } from 'react'

interface IAuthContext {
  userName: string
  isLoggedIn: boolean
  loading: boolean
  logout: () => void
  login: (Obj: { email: string; password: string }) => void
  signUp: (Obj: { username: string; password: string; nickname: string }) => void
}

export const AuthContext = createContext<IAuthContext>({
  userName: '',
  isLoggedIn: false,
  loading: false,
  login: () => null,
  signUp: () => null,
  logout: () => null,
})

export const useAuthContext = (): IAuthContext => useContext(AuthContext)
