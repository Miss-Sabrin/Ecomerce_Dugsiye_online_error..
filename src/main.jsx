import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{BrowserRouter} from 'react-router-dom'
import { ShopProvider } from './ShopiContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider> 
  <BrowserRouter> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ShopProvider>

  
)
