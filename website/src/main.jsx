import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// The legal routes are pre-rendered to static HTML at build time (see
// scripts/prerender.mjs) so they answer with a 200 and real content. Hydrate
// those instead of discarding the markup; everything else renders fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
