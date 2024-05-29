import { test, expect } from '@playwright/test';
import { requests } from './requests';

test.describe('[pokemon-api]', () =>  {
  for (const req of requests) {
    test(`${req.url}`, async ({ request }) => {
      const response = await request.get(`/api/v2/pokemon/${req.url}`)

      expect(response.status()).toEqual(200)
      expect((await response.json())).toHaveProperty('name', req.response.name)
    });
  }
})
