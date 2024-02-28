import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainSection } from './components/MainSection.jsx'
import { SchemeSwitch } from './components/SchemeSwitch.jsx'

ReactDOM.createRoot(document.getElementById('scheme')).render(
  <React.StrictMode>
    <SchemeSwitch />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('main-content')).render(
  <React.StrictMode>
    <MainSection />
  </React.StrictMode>
)
