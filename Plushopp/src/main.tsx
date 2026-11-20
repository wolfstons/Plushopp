import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PlussProvider } from './contexts/PlussContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlussProvider>
        <App />
    </PlussProvider>
  </StrictMode>,
)
