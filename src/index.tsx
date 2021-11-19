import Amplify from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import awsconfig from './aws-exports'

import App from './component/App/App'
import './assets/style/index.css'

Amplify.configure(awsconfig)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
