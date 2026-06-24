import { test, expect } from '@playwright/test';
import path from 'path';

const appPath = path.resolve('app/index.html');
const appUrl = `file://${appPath}`;

test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
});

test.describe('Pesquisar Usuário', () => {

    test('Deve pesquisar usuário existente', async ({ page }) => {
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.click('#btnCadastrar');

        await page.fill('#nome', 'Julia');
        await page.fill('#idade', '28');
        await page.fill('#cargo', 'DEV');
        await page.click('#btnCadastrar');

        await page.fill('#pesquisaUsuario', 'Julia');

        await expect(page.locator('#listaUsuarios')).toContainText('Julia - 28 anos - DEV - Ativo');
        await expect(page.locator('#listaUsuarios')).not.toContainText('Rodrigo');
    });

    test('Deve exibir mensagem ao pesquisar usuário inexistente', async ({ page }) => {
        await page.fill('#pesquisaUsuario', 'Fernando');

        await expect(page.locator('#listaUsuarios')).toContainText('Nenhum usuário encontrado.');
    });

});