import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookCallPage from './pages/BookCallPage.jsx'
import { BOOKING_PATH } from './config.js'

// Two pages only, so a tiny path switch instead of a router dependency.
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = path === BOOKING_PATH ? BookCallPage : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
