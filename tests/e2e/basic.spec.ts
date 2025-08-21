import { test, expect } from '@playwright/test';

test.describe('Calculator App E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // アニメーション無効化で安定化
    await page.addStyleTag({ 
      content: '*{transition:none!important;animation:none!important}' 
    });
    await page.goto('http://localhost:8000');
  });

  test('1. ページが正しく読み込まれる', async ({ page }) => {
    // ページタイトルチェック
    await expect(page).toHaveTitle(/Calculator App v0.1/);
    
    // メインヘッディングチェック
    await expect(page.locator('h1')).toContainText('Calculator App');
    
    // 電卓ディスプレイが存在することを確認
    await expect(page.locator('#display')).toBeVisible();
  });

  test('2. 基本的な数字入力ができる', async ({ page }) => {
    const display = page.locator('#display');
    
    // 数字ボタンをクリック
    await page.click('[data-testid="number-1"]');
    await page.click('[data-testid="number-2"]');
    await page.click('[data-testid="number-3"]');
    
    // ディスプレイに正しく表示されることを確認
    await expect(display).toHaveValue('123');
  });

  test('3. 基本的な足し算ができる', async ({ page }) => {
    const display = page.locator('#display');
    
    // 2 + 3 = の計算
    await page.click('[data-testid="number-2"]');
    await page.click('[data-testid="add-btn"]');
    await page.click('[data-testid="number-3"]');
    await page.click('[data-testid="equals-btn"]');
    
    // 結果が5になることを確認
    await expect(display).toHaveValue('5');
  });

  test('4. 基本的な引き算ができる', async ({ page }) => {
    const display = page.locator('#display');
    
    // 7 - 3 = の計算
    await page.click('[data-testid="number-7"]');
    await page.click('[data-testid="subtract-btn"]');
    await page.click('[data-testid="number-3"]');
    await page.click('[data-testid="equals-btn"]');
    
    // 結果が4になることを確認
    await expect(display).toHaveValue('4');
  });

  test('5. 基本的な掛け算ができる', async ({ page }) => {
    const display = page.locator('#display');
    
    // 4 × 5 = の計算
    await page.click('[data-testid="number-4"]');
    await page.click('[data-testid="multiply-btn"]');
    await page.click('[data-testid="number-5"]');
    await page.click('[data-testid="equals-btn"]');
    
    // 結果が20になることを確認
    await expect(display).toHaveValue('20');
  });

  test('6. 基本的な割り算ができる', async ({ page }) => {
    const display = page.locator('#display');
    
    // 8 ÷ 2 = の計算
    await page.click('[data-testid="number-8"]');
    await page.click('[data-testid="divide-btn"]');
    await page.click('[data-testid="number-2"]');
    await page.click('[data-testid="equals-btn"]');
    
    // 結果が4になることを確認
    await expect(display).toHaveValue('4');
  });

  test('7. クリアボタンが動作する', async ({ page }) => {
    const display = page.locator('#display');
    
    // 数字を入力してからクリア
    await page.click('[data-testid="number-1"]');
    await page.click('[data-testid="number-2"]');
    await page.click('[data-testid="number-3"]');
    await page.click('[data-testid="clear-btn"]');
    
    // ディスプレイが空になることを確認
    await expect(display).toHaveValue('');
  });

  test('8. 削除ボタンが動作する', async ({ page }) => {
    const display = page.locator('#display');
    
    // 数字を入力してから最後の文字を削除
    await page.click('[data-testid="number-1"]');
    await page.click('[data-testid="number-2"]');
    await page.click('[data-testid="number-3"]');
    await page.click('[data-testid="delete-btn"]');
    
    // 最後の文字が削除されることを確認
    await expect(display).toHaveValue('12');
  });

  test('9. 小数点が正しく動作する', async ({ page }) => {
    const display = page.locator('#display');
    
    // 3.14を入力
    await page.click('[data-testid="number-3"]');
    await page.click('[data-testid="decimal-btn"]');
    await page.click('[data-testid="number-1"]');
    await page.click('[data-testid="number-4"]');
    
    // 正しく表示されることを確認
    await expect(display).toHaveValue('3.14');
  });

  test('10. 複雑な計算ができる', async ({ page }) => {
    const display = page.locator('#display');
    
    // (2 + 3) × 4 = 20 の計算（段階的に）
    await page.click('[data-testid="number-2"]');
    await page.click('[data-testid="add-btn"]');
    await page.click('[data-testid="number-3"]');
    await page.click('[data-testid="equals-btn"]');
    
    // まず2+3=5の結果を確認
    await expect(display).toHaveValue('5');
    
    // 次に×4を入力
    await page.click('[data-testid="multiply-btn"]');
    await page.click('[data-testid="number-4"]');
    await page.click('[data-testid="equals-btn"]');
    
    // 最終結果が20になることを確認
    await expect(display).toHaveValue('20');
  });
});