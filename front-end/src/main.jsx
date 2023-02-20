import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'

import App from './App'
import './index.css'

const msalConfig = {
  auth: {
    clientId: "799e21ab-1e95-4e43-9b6f-4e4f772f69c5",
    authority: "https://login.microsoftonline.com/564b7b99-6149-4bb9-8635-d7eb9f95bf11",
    redirechtUri: "http://localhost:5173",
  }
}

const msalInstance = new PublicClientApplication(msalConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>,
)
