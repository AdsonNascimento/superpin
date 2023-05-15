import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import SobreSuperpin from './pages/SobreSuperpin.jsx'
import Galeria from './pages/Galeria.jsx'
import Marista from './pages/Marista.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'sobre',
        element: <SobreSuperpin />
      },
      {
        path: 'galeria',
        element: <Galeria />
      },
      {
        path: 'marista',
        element: <Marista />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
