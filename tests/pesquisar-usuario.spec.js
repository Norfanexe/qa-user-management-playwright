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
 * Pesquisar Usuário
 *
 * Objetivo: Validar a pesquisa de usuários cadastrados.
 *
 * RF: 007-008
 * US: 004
 * CT: 007-008
 */
test.describe('US-004 | Pesquisar Usuário', () => {

    test('CT-007 | Deve pesquisar usuário existente', async ({ page }) => {

        // Cadastro inicial
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await page.fill('#nome', 'Julia');
        await page.fill('#idade', '28');
        await page.fill('#cargo', 'DEV');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        // Pesquisa
        await page.fill('#pesquisaUsuario', 'Julia');

        // Validações
        await expect(page.locator('#listaUsuarios'))
            .toContainText('Julia - 28 anos - DEV - Ativo');

        await expect(page.locator('#listaUsuarios'))
            .not.toContainText('Rodrigo');

    });

    test('CT-008 | Deve exibir mensagem ao pesquisar usuário inexistente', async ({ page }) => {

        // Pesquisa
        await page.fill('#pesquisaUsuario', 'Fernando');

        // Validação
        await expect(page.locator('#listaUsuarios'))
            .toContainText('Nenhum usuário encontrado.');

    });

});