import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext'

// El HTML del build ya contiene el árbol renderizado (ver prerender.mjs).
// hydrateRoot lo reutiliza en vez de descartarlo, para que el contenido
// indexable siga presente incluso antes de que cargue JavaScript.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
