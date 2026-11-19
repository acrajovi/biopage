/**
 * Prerender del sitio BIO. Se ejecuta después de los dos builds de Vite.
 * Toma el index.html generado y sustituye el <div id="root"> vacío por el
 * HTML real de cada ruta, de modo que Google reciba contenido sin ejecutar JS.
 */
import fs from 'node:fs';
import path from 'node:path';
import { render } from './dist-ssr/entry-server.js';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SSR_DIR = path.join(ROOT, 'dist-ssr');
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const SITE = 'https://bio.com.py';

const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'BIO Soluciones Tecnológicas | Software, ERP SIFEN & Web en Paraguay',
    description:
      'ERP SaaS con facturación electrónica SIFEN (BIOSHOP), desarrollo web/móvil y utilidades gratuitas: Datos RUC Py, Calcular BTU y QR & Links.',
  },
  {
    path: '/privacidad',
    file: 'privacidad/index.html',
    title: 'Política de Privacidad | BIO Soluciones Tecnológicas',
    description:
      'Cómo BIO Soluciones Tecnológicas recopila, utiliza y protege los datos de los visitantes de bio.com.py y de sus herramientas gratuitas.',
  },
  {
    path: '/terminos',
    file: 'terminos/index.html',
    title: 'Términos y Condiciones | BIO Soluciones Tecnológicas',
    description:
      'Condiciones de uso de bio.com.py, sus servicios de desarrollo de software y las herramientas gratuitas de BIO Soluciones Tecnológicas.',
  },
];

const setMeta = (html, selector, value) => html.replace(selector, value);

for (const route of routes) {
  const canonical = `${SITE}${route.path === '/' ? '/' : route.path}`;
  let html = template.replace(
    '<div id="root"></div>',
    () => `<div id="root">${render(route.path)}</div>`,
  );

  html = setMeta(html, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
  html = setMeta(
    html,
    /(<meta\s+name="description"\s+content=")[\s\S]*?("\s*\/>)/,
    `$1${route.description}$2`,
  );
  html = setMeta(
    html,
    /(<link\s+rel="canonical"\s+href=")[\s\S]*?("\s*\/>)/,
    `$1${canonical}$2`,
  );
  html = setMeta(html, /(<meta\s+property="og:url"\s+content=")[\s\S]*?("\s*\/>)/, `$1${canonical}$2`);
  html = setMeta(html, /(<meta\s+property="og:title"\s+content=")[\s\S]*?("\s*\/>)/, `$1${route.title}$2`);
  html = setMeta(
    html,
    /(<meta\s+property="og:description"\s+content=")[\s\S]*?("\s*\/>)/,
    `$1${route.description}$2`,
  );

  const out = path.join(DIST, route.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  const textLength =
    html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ').length;
  console.log(`prerender ${route.path} -> ${route.file} (${Math.round(textLength)} chars de texto)`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemapPath = path.join(DIST, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8').replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`,
  );
  fs.writeFileSync(sitemapPath, sitemap);
}

fs.rmSync(SSR_DIR, { recursive: true, force: true });
console.log('prerender completado; dist-ssr eliminado');
