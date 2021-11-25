import Header from '../Header'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Header />
      <div className="flex-grow p-3">{children}</div>
    </div>
  )
}

export default Layout
