import { test, expect } from '@playwright/test';
import path from 'path';

const appPath = path.resolve('app/index.html');
const appUrl = `file://${appPath}`;

test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
});

test.describe('Excluir Usuário', () => {

    test('Deve excluir usuário cadastrado', async ({ page }) => {
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#listaUsuarios')).toContainText('Rodrigo - 25 anos - QA - Ativo');

        await page.getByRole('button', { name: 'Excluir' }).click();

        await expect(page.locator('#mensagem')).toHaveText('Usuário excluído com sucesso.');
        await expect(page.locator('#listaUsuarios')).not.toContainText('Rodrigo - 25 anos - QA - Ativo');
    });

});