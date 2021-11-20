import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import App from './component/App/App'

import Amplify from 'aws-amplify';
import config from './aws-exports';

import './assets/style/index.css';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
