import React, { StrictMode } from 'react' // Add `React` to the import
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='697722839510-itbua9lfrd04femnu9j42at1lrhoibgm.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
)
