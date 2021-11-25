import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'

const Header = (): JSX.Element => {
  return (
    <header className="flex p-3 bg-gray-500 gap-5">
      <h1 className="text-xl">Fabulas</h1>
      <nav>
        <ul className="h-full flex items-end gap-3">
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BIBLIOTHEQUE}>Bibliotheque</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
