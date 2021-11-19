import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Bibliotheque from '../Bibliotheque'
import { ROUTES } from '../../constants'

const Page = (): JSX.Element => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.BIBLIOTHEQUE} element={<Bibliotheque />} />
    </Routes>
  )
}

export default Page
