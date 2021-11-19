import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Header from '../Header'
import Page from '../Routes'

type Props = {
  signOut: () => void
  user: Record<string, unknown>
}

function App({ signOut, user }: Props): JSX.Element {
  return (
    <div className="App">
      <h1>Fabulas</h1>
      <Header />
      <Page />
      <button onClick={signOut}>Logout</button>
    </div>
  )
}

export default withAuthenticator(App)
