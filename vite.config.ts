import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { catalogMeta } from './vite.catalog';

export default defineConfig({
  plugins: [
    catalogMeta(),
    tailwindcss(),
    sveltekit({
      // Every page is prerendered. 404.html only renders the error page for unknown paths on GitHub Pages.
      adapter: adapter({ fallback: '404.html' }),
      paths: {
        base: (process.env.NODE_ENV === 'production' ? (process.env.BASE_PATH ?? '') : '') as '' | `/${string}`
      },
      prerender: {
        // sitemap.xml and robots.txt are not linked from any page, so the crawler would miss them.
        entries: ['*', '/sitemap.xml', '/robots.txt', '/catalog.json'],
        handleHttpError: 'fail',
        handleMissingId: 'fail'
      }
    })
  ],
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node'
  }
});
