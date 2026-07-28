import { test, expect } from '@playwright/test';
import path from 'path';

const appPath = path.resolve('app/index.html');
const appUrl = `file://${appPath}`;

test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
});

/**
 * Editar Usuário
 *
 * Objetivo: Validar a atualização de usuários previamente cadastrados.
 *
 * RF: 005
 * US: 002
 * CT: 005
 */
test.describe('US-002 | Editar Usuário', () => {

    test('CT-005 | Deve editar usuário válido', async ({ page }) => {

        // Cadastro inicial
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        // Edição
        await page.getByRole('button', { name: 'Editar' }).click();

        await page.fill('#nome', 'Rodrigo Pereira');
        await page.fill('#idade', '26');
        await page.fill('#cargo', 'QA Pleno');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        // Validações
        await expect(page.locator('#mensagem'))
            .toHaveText('Usuário atualizado com sucesso.');

        await expect(page.locator('#listaUsuarios'))
            .toContainText('Rodrigo Pereira - 26 anos - QA Pleno - Ativo');

        await expect(page.locator('#listaUsuarios'))
            .not.toContainText('Rodrigo - 25 anos - QA - Ativo');

    });

});