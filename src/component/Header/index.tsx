import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <NavLink to={ROUTES.BIBLIOTHEQUE}>Bibliotheque</NavLink>
      </nav>
    </header>
  )
}

export default Header
