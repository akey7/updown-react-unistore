import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'unistore/react'
import { store } from './store-and-actions'

const ProviderApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render(<ProviderApp />, document.getElementById('root'))
registerServiceWorker()
