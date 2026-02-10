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

test.describe('Provider switch is atomic (no overlap)', () => {
  test('switching providers stops previous playback first', async ({ page }) => {
    await page.waitForSelector('[data-provider="spotify"]');
    await page.waitForSelector('[data-provider="youtube"]');

    await page.click('[data-provider="spotify"]');
    await page.waitForTimeout(800);

    await page.click('[data-provider="youtube"]');

    const states = await page.evaluate(() => {
      return (window as any).__PLAYER_DEBUG_STATE__;
    });

    expect(states.activeProvider).toBe('youtube');
    expect(states.isPlaying).toBe(true);
    expect(states.providers.spotify?.isPlaying).toBe(false);
    expect(states.providers.youtube?.isPlaying).toBe(true);
  });
});
