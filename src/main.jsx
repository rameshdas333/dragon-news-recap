import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import router from './components/Router/Router.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
