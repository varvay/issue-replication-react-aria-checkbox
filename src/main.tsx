import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App type="normal" />
  },
  {
    path: "/normal",
    element: <App type="normal" />
  },
  {
    path: "/anomaly",
    element: <App type="anomaly" />
  },
  {
    path: "/workaround",
    element: <App type="workaround" />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
