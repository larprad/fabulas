import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Bibliotheque from '../../pages/Bibliotheque'
import Story from '../../pages/Story'
import Creation from '../../pages/Creation'
import Login from '../../pages/Login'

import { ROUTES } from '../../constants'
import Subscribe from '../../pages/Subscribe'

const Page = (): JSX.Element => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SUBSCRIBE} element={<Subscribe />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.BIBLIOTHEQUE} element={<Bibliotheque />} />
      <Route path={ROUTES.STORY + ':id'} element={<Story />} />
      <Route path={ROUTES.CREATION} element={<Creation />} />
    </Routes>
  )
}

export default Page
