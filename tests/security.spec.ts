import { test, expect } from '@playwright/test';

test.describe('Security Headers', () => {
  test('should return strict security headers on the homepage', async ({ page }) => {
    const response = await page.goto('/');
    
    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const headers = response?.headers();
    expect(headers).toBeDefined();
    
    // Content-Security-Policy
    expect(headers?.['content-security-policy']).toBeDefined();
    expect(headers?.['content-security-policy']).toContain("default-src 'self'");
    
    // Strict-Transport-Security
    expect(headers?.['strict-transport-security']).toBeDefined();
    expect(headers?.['strict-transport-security']).toContain('max-age=63072000');
    
    // X-Frame-Options
    expect(headers?.['x-frame-options']).toBeDefined();
    expect(headers?.['x-frame-options']).toBe('SAMEORIGIN');
    
    // X-Content-Type-Options
    expect(headers?.['x-content-type-options']).toBe('nosniff');
  });
});
