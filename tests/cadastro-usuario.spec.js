import { test, expect } from '@playwright/test';
import path from 'path';

const appPath = path.resolve('app/index.html');
const appUrl = `file://${appPath}`;

/**
 * Cadastro de Usuários
 *
 * Objetivo: Validar o fluxo de cadastro e suas regras de negócio.
 *
 * RN: 001-004
 * RF: 001-004
 * US: 001
 * CT: 001-004
 */
test.describe('US-001 | Cadastro de Usuários', () => {

    test('CT-001 | Deve cadastrar usuário válido', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Usuário cadastrado com sucesso.');
        await expect(page.locator('#listaUsuarios')).toContainText('Rodrigo - 25 anos - QA - Ativo');
    });

    test('CT-002 | Não deve cadastrar usuário com campos vazios', async ({ page }) => {
        await page.goto(appUrl);

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Erro: preencha todos os campos.');
        await expect(page.locator('#listaUsuarios')).toContainText('Nenhum usuário encontrado.');
    });

    test('CT-003 | Não deve cadastrar menor de idade como ativo', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'João');
        await page.fill('#idade', '17');
        await page.fill('#cargo', 'Estagiário');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Erro: menores de idade não podem ser ativos.');
        await expect(page.locator('#listaUsuarios')).not.toContainText('João');
    });

    test('CT-004 | Deve cadastrar menor de idade como inativo', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'João');
        await page.fill('#idade', '17');
        await page.fill('#cargo', 'Estagiário');
        await page.selectOption('#ativo', 'false');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Usuário cadastrado com sucesso.');
        await expect(page.locator('#listaUsuarios')).toContainText('João - 17 anos - Estagiário - Inativo');
    });

});

/**
 * Mensagens do Sistema
 *
 * Objetivo: Validar o feedback apresentado ao usuário após operações de cadastro.
 *
 * RF: 012-013
 * US: 006
 * CT: 012-013
 */
test.describe('US-006 | Mensagens do Sistema', () => {

    test('CT-012 | Deve exibir mensagem de sucesso ao cadastrar usuário válido', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Maria');
        await page.fill('#idade', '30');
        await page.fill('#cargo', 'DEV');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Usuário cadastrado com sucesso.');
    });

    test('CT-013 | Deve exibir mensagem de erro ao tentar cadastrar sem preencher campos', async ({ page }) => {
        await page.goto(appUrl);

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Erro: preencha todos os campos.');
    });

});

/**
 * Lista de Usuários
 *
 * Objetivo: Validar a exibição dos usuários cadastrados na listagem.
 *
 * RF: 005-008
 * US: 004
 * CT: 007-008
 */
test.describe('US-004 | Lista de Usuários', () => {

    test('CT-007 | Usuário válido deve aparecer na lista', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Carlos');
        await page.fill('#idade', '40');
        await page.fill('#cargo', 'PO');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#listaUsuarios')).toContainText('Carlos - 40 anos - PO - Ativo');
    });

    test('CT-008 | Usuário inválido não deve aparecer na lista', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Pedro');
        await page.fill('#idade', '15');
        await page.fill('#cargo', 'Estagiário');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#listaUsuarios')).not.toContainText('Pedro');
    });

});