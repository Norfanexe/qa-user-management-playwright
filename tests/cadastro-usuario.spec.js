import { test, expect } from '@playwright/test';
import path from 'path';

const appPath = path.resolve('app/index.html');
const appUrl = `file://${appPath}`;

//Suíte: Cadastro de Usuários
//Objetivo: Validar os principais fluxos funcionais do cadastro, cobrindo cenários positivos e negativos da regra de negócio.
test.describe('Cadastro de Usuários', () => {

    test('Deve cadastrar usuário válido', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Rodrigo');
        await page.fill('#idade', '25');
        await page.fill('#cargo', 'QA');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Usuário cadastrado com sucesso.');
        await expect(page.locator('#listaUsuarios')).toContainText('Rodrigo - 25 anos - QA - Ativo');
    });

    test('Não deve cadastrar usuário com campos vazios', async ({ page }) => {
        await page.goto(appUrl);

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Erro: preencha todos os campos.');
        await expect(page.locator('#listaUsuarios')).toContainText('Nenhum usuário encontrado.');
    });

    test('Não deve cadastrar menor de idade como ativo', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'João');
        await page.fill('#idade', '17');
        await page.fill('#cargo', 'Estagiário');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Erro: menores de idade não podem ser ativos.');
        await expect(page.locator('#listaUsuarios')).not.toContainText('João');
    });

    test('Deve cadastrar menor de idade como inativo', async ({ page }) => {
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

//Suíte: Mensagens do Sistema
//Objetivo: Validar se o sistema exibe feedback correto para o usuário em cenários de sucesso e erro.
test.describe('Mensagens do Sistema', () => {

    test('Deve exibir mensagem de sucesso ao cadastrar usuário válido', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Maria');
        await page.fill('#idade', '30');
        await page.fill('#cargo', 'DEV');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Usuário cadastrado com sucesso.');
    });

    test('Deve exibir mensagem de erro ao tentar cadastrar sem preencher campos', async ({ page }) => {
        await page.goto(appUrl);

        await page.click('#btnCadastrar');

        await expect(page.locator('#mensagem')).toHaveText('Erro: preencha todos os campos.');
    });

});

//Suíte: Lista de Usuários
//Objetivo: Validar a exibição correta dos usuários após tentativas de cadastro garantindo que somente registros válidos sejam apresentados.
test.describe('Lista de Usuários', () => {

    test('Usuário válido deve aparecer na lista', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Carlos');
        await page.fill('#idade', '40');
        await page.fill('#cargo', 'PO');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#listaUsuarios')).toContainText('Carlos - 40 anos - PO - Ativo');
    });

    test('Usuário inválido não deve aparecer na lista', async ({ page }) => {
        await page.goto(appUrl);

        await page.fill('#nome', 'Pedro');
        await page.fill('#idade', '15');
        await page.fill('#cargo', 'Estagiário');
        await page.selectOption('#ativo', 'true');

        await page.click('#btnCadastrar');

        await expect(page.locator('#listaUsuarios')).not.toContainText('Pedro');
    });

});