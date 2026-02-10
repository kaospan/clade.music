// @ts-nocheck
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*.supabase.co/**', (route) => route.fulfill({ status: 200, body: '{}' }));
  await page.route('**open.spotify.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>spotify</body></html>' })
  );
  await page.route('**youtube-nocookie.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>youtube</body></html>' })
  );
  await page.route('**www.youtube.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>youtube</body></html>' })
  );
  await page.goto('/clademusic/__e2e__/player');
});

/**
 * Verifies that Spotify playback falls back to the official embed for guests (no auth).
 * Ensures only one Spotify embed iframe is mounted and the universal player remains singleton.
 */
test.describe('Spotify embed fallback for guests', () => {
  test('renders a single Spotify embed iframe after clicking Spotify quickstream', async ({ page }) => {
    const spotifyBtn = page.locator('[data-provider="spotify"]').first();
    await expect(spotifyBtn).toBeVisible();

    await spotifyBtn.click();

    const providerFrame = page.frameLocator('#universal-player').locator('iframe#provider');
    await expect(providerFrame).toHaveCount(1, { timeout: 8000 });
    await expect(providerFrame).toHaveAttribute('src', /open\.spotify\.com\/embed\/track/);

    const playerContainer = page.locator('[data-player="universal"]');
    await expect(playerContainer).toHaveCount(1);
  });
});
