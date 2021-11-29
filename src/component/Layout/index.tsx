import Header from '../Header'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <div className="p-3 max-w-screen-lg container mx-auto">{children}</div>
    </div>
  )
}

export default Layout
