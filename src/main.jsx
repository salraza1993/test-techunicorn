import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/scss/variables.scss'
import './assets/scss/mixins.scss'
import './assets/scss/classes.scss'
import './assets/scss/style.scss'
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
