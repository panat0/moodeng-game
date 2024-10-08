import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Game from './game.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element:<App/>

  },

  {
    path: 'game',
    element:<Game/>

  },


])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)