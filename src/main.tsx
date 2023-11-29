/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />) 
/* 
import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App   />); */