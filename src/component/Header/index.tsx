import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { useAuthContext } from '../../state/Auth/AuthContext'

import './header.scss'

const Header = (): JSX.Element => {
  const { userName, logout, isLoggedIn } = useAuthContext()
  return (
    <header className="header flex p-3 bg-gray-500 gap-10">
      <h1>Fabulas</h1>
      <nav className="flex gap-3 flex-grow justify-between">
        <ul className="h-full flex items-end gap-5">
          <li>
            <NavLink className="nav-link" to={ROUTES.LOGIN}>
              Connexion
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={ROUTES.SUBSCRIBE}>
              Inscription
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={ROUTES.HOME}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={ROUTES.BIBLIOTHEQUE}>
              Bibliotheque
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={ROUTES.CREATION}>
              Création
            </NavLink>
          </li>
        </ul>
        {isLoggedIn && (
          <div className="flex gap-3 items-end">
            <p>{userName} est connecté</p> <button onClick={logout}>Deconnexion</button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
