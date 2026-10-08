import { resolve } from '$app/paths';

// Site-wide constants. SITE_URL is the public origin plus base path, used for canonical links and the sitemap.
export const SITE_NAME = 'Open Imaging Index';
export const SITE_TAGLINE = 'Find medical imaging datasets by modality, contrast, condition and cohort';
export const REPO = 'Spenhouet/open-imaging-index';
export const REPO_URL = `https://github.com/${REPO}`;
// The Pages API reports custom domains as http://, while the site is served over HTTPS.
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://spenhouet.com/open-imaging-index')
  .replace(/^http:\/\/(?!localhost)/, 'https://')
  .replace(/\/$/, '');

export const editUrl = (path: string) => `${REPO_URL}/edit/main/${path}`;
export const issueUrl = (title: string, body = '') =>
  `${REPO_URL}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;

/** Internal link with the base path. `path` has no leading slash, pages end in `/`: link('datasets/ixi/'). */
export const link = (path = ''): string => (resolve as unknown as (p: string) => string)(path);
