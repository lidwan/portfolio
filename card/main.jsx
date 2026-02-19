import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from '../src/pages/Card/Card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Card />
    </StrictMode>,
)
