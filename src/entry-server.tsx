import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

/**
 * Entrada usada sólo en tiempo de build. Genera el HTML de cada ruta para que
 * los crawlers (AdSense, Googlebot) reciban contenido real sin ejecutar JS.
 * La navegación del navegador sigue siendo BrowserRouter en main.tsx.
 */
export function render(path: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>,
  );
}
