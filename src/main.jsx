import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route , Routes} from 'react-router'
import './index.css'
import RootLayout from './layouts/root.layout.jsx'
import AdvancedLevelPage from './pages/advanced-level.page'
import Physics2026Page from './pages/Physics-2026.page'
import Physics2027Page from './pages/Physics-2027.page'
import Physics2028Page from './pages/Physics-2028.page'
import PhysicsStudyPackPage from './pages/physics-study-pack.page'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'
import Dashboard from './pages/dashboard'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/advanced-level" element={<AdvancedLevelPage />} />
            <Route path="/physics-2026" element={<Physics2026Page />} />
            <Route path="/physics-2027" element={<Physics2027Page />} />
            <Route path="/physics-2028" element={<Physics2028Page />} />
            <Route path="/physics-study-pack" element={<PhysicsStudyPackPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
