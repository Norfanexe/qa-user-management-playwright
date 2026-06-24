import { test, expect } from '@playwright/test';
import path from 'path';

const appPath = path.resolve('app/index.html');
const appUrl = `file://${appPath}`;

test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
});

test.describe('Persistência de Usuários', () => {

    test('Deve manter usuário cadastrado após atualizar a página', async ({ page }) => {
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await page.reload();

        await expect(page.locator('#listaUsuarios')).toContainText('Rodrigo - 25 anos - QA - Ativo');
    });

    test('Deve manter usuário editado após atualizar a página', async ({ page }) => {
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.click('#btnCadastrar');

        await page.getByRole('button', { name: 'Editar' }).click();

        await page.fill('#nome', 'Rodrigo Pereira');
        await page.fill('#idade', '26');
        await page.fill('#cargo', 'QA Pleno');

        await page.click('#btnCadastrar');

        await page.reload();

        await expect(page.locator('#listaUsuarios')).toContainText('Rodrigo Pereira - 26 anos - QA Pleno - Ativo');
    });

    test('Deve manter usuário excluído após atualizar a página', async ({ page }) => {
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.click('#btnCadastrar');

        await page.getByRole('button', { name: 'Excluir' }).click();

        await page.reload();

        await expect(page.locator('#listaUsuarios')).not.toContainText('Rodrigo');
    });

});