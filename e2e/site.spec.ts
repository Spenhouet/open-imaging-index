import { expect, test } from '@playwright/test';

test('catalog filters by cohort and keeps the filters in the URL', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Find the right medical imaging dataset');
  const all = await page.locator('article').count();
  expect(all).toBeGreaterThan(5);

  await page.getByRole('button', { name: 'FLAIR', exact: true }).first().click();
  await expect(page).toHaveURL(/contrasts=FLAIR/);
  const filtered = await page.locator('article').count();
  expect(filtered).toBeLessThan(all);
  await expect(page.locator('article').first()).toContainText('matching subjects');

  await page.reload();
  await expect(page.locator('article')).toHaveCount(filtered);
  expect(errors).toEqual([]);
});

test('search finds a dataset by condition synonym', async ({ page }) => {
  await page.goto('/?q=alzheimer');
  // Results reflect the query once the full catalog has loaded.
  await expect(page.locator('[aria-live=polite]')).not.toContainText('Loading');
  await expect(page.locator('article')).not.toHaveCount(12);
  const names = await page.locator('article h3').allInnerTexts();
  expect(names.join(' ')).toMatch(/ADNI|OASIS/);
});

test('dataset page shows license rules with quotes and structured data', async ({ page }) => {
  await page.goto('/datasets/ixi/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('IXI');
  await expect(page.locator('#license')).toContainText('Commercial use');
  const ld = await page.locator('script[type="application/ld+json"]').first().textContent();
  expect(JSON.parse(ld!)['@type']).toBe('Dataset');
});

test('explore cross table links to the catalog', async ({ page }) => {
  await page.goto('/explore/?rows=modality&cols=access&measure=datasets');
  const cell = page.locator('table a').first();
  await expect(cell).toBeVisible();
  await cell.click();
  await expect(page).toHaveURL(/modality=/);
});

test('skills page offers install commands and skill downloads', async ({ page, request }) => {
  await page.goto('/skills/');
  await expect(page.getByText('/plugin install open-imaging-index@open-imaging-index')).toBeVisible();
  await page.getByRole('tab', { name: /Codex/ }).click();
  await expect(page.getByText('npx skills add Spenhouet/open-imaging-index').first()).toBeVisible();
  const zip = await request.get('/skills/find-imaging-datasets.zip');
  expect(zip.status()).toBe(200);
  expect((await zip.body()).subarray(0, 2).toString()).toBe('PK');
  const llms = await request.get('/llms.txt');
  expect(await llms.text()).toContain('# Open Imaging Index');
});
