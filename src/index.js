import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Overlay } from './Overlay'

// Create sections for scrolling
const ScrollContainer = () => (
  <div className="scroll-container">
    {Array.from({ length: 12 }, (_, i) => (
      <div key={i} className="section">
        <div className="section-marker">{i + 1}/12</div>
      </div>
    ))}
  </div>
)

createRoot(document.getElementById('root')).render(
  <>
    <div className="canvas-container">
      <App />
    </div>
    <div className="overlay-container">
      <Overlay />
    </div>
    <ScrollContainer />
  </>
)
