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
 * Persistência de Usuários
 *
 * Objetivo: Validar a persistência dos dados após o recarregamento da aplicação.
 *
 * RF: 009-011
 * US: 005
 * CT: 009-011
 */
test.describe('US-005 | Persistência de Usuários', () => {

    test('CT-009 | Deve manter usuário cadastrado após atualizar a página', async ({ page }) => {

        // Cadastro inicial
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        // Atualização da página
        await page.reload();

        // Validação
        await expect(page.locator('#listaUsuarios'))
            .toContainText('Rodrigo - 25 anos - QA - Ativo');

    });

    test('CT-010 | Deve manter usuário editado após atualizar a página', async ({ page }) => {

        // Cadastro inicial
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');

        await page.click('#btnCadastrar');

        // Edição
        await page.getByRole('button', { name: 'Editar' }).click();

        await page.fill('#nome', 'Rodrigo Pereira');
        await page.fill('#idade', '26');
        await page.fill('#cargo', 'QA Pleno');

        await page.click('#btnCadastrar');

        // Atualização da página
        await page.reload();

        // Validação
        await expect(page.locator('#listaUsuarios'))
            .toContainText('Rodrigo Pereira - 26 anos - QA Pleno - Ativo');

    });

    test('CT-011 | Deve manter usuário excluído após atualizar a página', async ({ page }) => {

        // Cadastro inicial
        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');

        await page.click('#btnCadastrar');

        // Exclusão
        await page.getByRole('button', { name: 'Excluir' }).click();

        // Atualização da página
        await page.reload();

        // Validação
        await expect(page.locator('#listaUsuarios'))
            .not.toContainText('Rodrigo');

    });

});