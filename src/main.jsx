import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Store from './Store/Store';
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
      <App />
    </Provider>

)