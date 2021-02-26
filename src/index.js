import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './Store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import "react-grid-layout/css/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
