import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App isAnomaly={false} />
  },
  {
    path: "/normal",
    element: <App isAnomaly={false} />
  },
  {
    path: "/anomaly",
    element: <App isAnomaly={true} />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
