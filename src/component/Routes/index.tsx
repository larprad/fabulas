import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Bibliotheque from '../../pages/Bibliotheque'
import Story from '../../pages/Story'
import { ROUTES } from '../../constants'
import Creation from '../../pages/Creation'

const Page = (): JSX.Element => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.BIBLIOTHEQUE} element={<Bibliotheque />} />
      <Route path={ROUTES.STORY + ':id'} element={<Story />} />
      <Route path={ROUTES.CREATION} element={<Creation />} />
    </Routes>
  )
}

export default Page
