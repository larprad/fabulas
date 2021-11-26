import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import App from './component/App/App'
import './assets/style/index.scss'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
