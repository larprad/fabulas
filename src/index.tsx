import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import Amplify from 'aws-amplify'
import config from './aws-exports'

import App from './component/App/App'

import './assets/style/index.css'

Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
