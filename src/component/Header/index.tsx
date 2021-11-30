import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'

import './header.scss'

const Header = (): JSX.Element => {
  return (
    <header className="header flex p-3 bg-gray-500 gap-10">
      <h1>Fabulas</h1>
      <nav>
        <ul className="h-full flex items-end gap-5">
          <li>
            <NavLink className="nav-link" to={ROUTES.LOGIN}>
              Login
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
      </nav>
    </header>
  )
}

export default Header
