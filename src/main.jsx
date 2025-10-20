import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route , Routes} from 'react-router'
import './index.css'
import LoadingPage from './pages/loading.page'
import HomePage from './pages/home.page'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import AdvancedLevelPage from './pages/advanced-level.page'
import Physics2026Page from './pages/Physics-2026.page'
import Physics2027Page from './pages/Physics-2027.page'
import Physics2028Page from './pages/Physics-2028.page'
import PhysicsStudyPackPage from './pages/physics-study-pack.page'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/advanced-level" element={<AdvancedLevelPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
