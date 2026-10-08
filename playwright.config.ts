import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  testMatch: '*.spec.ts',
  webServer: { command: 'npx vite preview --port 4174 --strictPort', port: 4174, reuseExistingServer: !process.env.CI },
  use: { baseURL: 'http://localhost:4174' }
});
