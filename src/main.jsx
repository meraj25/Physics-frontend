import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoadingPage from './pages/loading.page'
import HomePage from './pages/home.page'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import AdvancedLevelPage from './pages/advanced-level.page'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <AdvancedLevelPage />
    
  </StrictMode>,
)
