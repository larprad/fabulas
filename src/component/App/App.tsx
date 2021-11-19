import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Fabulas</h1>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(App)
