import {createRoot} from 'react-dom/client'
import App from './src/App'

const domRoot = document.getElementById('app')

const root = createRoot(domRoot)

root.render(<App/>)