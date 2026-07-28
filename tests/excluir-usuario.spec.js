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
 * Excluir Usuário
 *
 * Objetivo: Validar a exclusão de usuários previamente cadastrados.
 *
 * RF: 006
 * US: 003
 * CT: 006
 */
test.describe('US-003 | Excluir Usuário', () => {

    test('CT-006 | Deve excluir usuário cadastrado', async ({ page }) => {

        // Cadastro inicial
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#listaUsuarios'))
            .toContainText('Rodrigo - 25 anos - QA - Ativo');

        // Exclusão
        await page.getByRole('button', { name: 'Excluir' }).click();

        // Validações
        await expect(page.locator('#mensagem'))
            .toHaveText('Usuário excluído com sucesso.');

        await expect(page.locator('#listaUsuarios'))
            .not.toContainText('Rodrigo - 25 anos - QA - Ativo');

    });

});