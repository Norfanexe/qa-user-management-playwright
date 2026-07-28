# Plano de Testes - QA User Management Playwright

## 1. Objetivo

Validar o funcionamento do sistema de Gerenciamento de Usuários, garantindo que os requisitos funcionais e as regras de negócio sejam atendidos por meio de testes automatizados End-to-End (E2E) desenvolvidos com Playwright.

O plano contempla a validação dos fluxos de cadastro, edição, exclusão, pesquisa, persistência de dados e feedback ao usuário, assegurando a integridade da aplicação nos navegadores Chromium, Firefox e WebKit.

---

## 2. Escopo

Serão testadas as seguintes funcionalidades:

- Cadastro de usuários
- Edição de usuários cadastrados
- Exclusão de usuários
- Pesquisa de usuários
- Persistência dos dados após atualização da aplicação
- Validação das regras de negócio
- Validação dos campos obrigatórios
- Validação das mensagens de sucesso e erro
- Exibição correta dos usuários na listagem
- Execução dos testes nos navegadores Chromium, Firefox e WebKit

---

## 3. Fora do Escopo

Não serão testados neste ciclo:

- Integração com API externa
- Login/autenticação
- Testes de performance
- Testes de acessibilidade
- Testes de segurança
- Testes de carga
- Testes de usabilidade
- Responsividade mobile
- Integração com backend real

---

## 4. Regras de Negócio

| ID | Regra |
|----|--------|
| RN-001 | Nome é obrigatório |
| RN-002 | Idade é obrigatória |
| RN-003 | Cargo é obrigatório |
| RN-004 | Usuários menores de 18 anos não podem ser cadastrados como Ativo |

---

## 5. Requisitos Funcionais

| ID | Requisito |
|----|------------|
| RF-001 | Permitir cadastro de usuários válidos |
| RF-002 | Bloquear cadastro com campos obrigatórios vazios |
| RF-003 | Bloquear cadastro de menor de idade como Ativo |
| RF-004 | Permitir cadastro de menor de idade como Inativo |
| RF-005 | Permitir edição de usuários |
| RF-006 | Permitir exclusão de usuários |
| RF-007 | Permitir pesquisa de usuários cadastrados |
| RF-008 | Exibir mensagem quando a pesquisa não encontrar resultados |
| RF-009 | Manter usuários cadastrados após atualização da aplicação |
| RF-010 | Manter alterações após edição da aplicação |
| RF-011 | Manter exclusões após atualização da aplicação |
| RF-012 | Exibir mensagem de sucesso nas operações concluídas |
| RF-013 | Exibir mensagem de erro nas operações inválidas |

---

## 6. Tipos de Teste

| Tipo | Aplicação |
|------|------------|
| Teste Funcional | Validar os requisitos funcionais da aplicação |
| Teste Positivo | Validar fluxos permitidos pelas regras de negócio |
| Teste Negativo | Validar bloqueios e mensagens de erro |
| Teste Automatizado E2E | Simular a interação real do usuário com a interface |
| Teste de Regressão | Garantir que funcionalidades existentes continuem operando corretamente após alterações |
| Teste Cross-Browser | Validar o comportamento da aplicação nos navegadores Chromium, Firefox e WebKit |
| Teste Exploratório | Apoiar a identificação de cenários para automação |

---

## 7. Ferramentas Utilizadas

| Ferramenta | Finalidade |
|------------|------------|
| JavaScript | Desenvolvimento da aplicação |
| HTML/CSS | Interface da aplicação |
| Playwright | Automação de testes E2E |
| Node.js | Ambiente de execução JavaScript |
| Git | Versionamento do projeto |
| VS Code | Desenvolvimento da aplicação e testes |
| GitHub | Hospedagem e versionamento do código |

---

## 8. Ambiente de Teste

| Item | Descrição |
|------|------------|
| Sistema Operacional | Windows |
| Navegadores | Chromium, Firefox e WebKit |
| Framework de Testes | Playwright |
| Execução | Local |
| Aplicação | HTML local via File Path |
| Persistência | LocalStorage |
| Relatório | Playwright HTML Report |

---

## 9. Critérios de Entrada

Os testes poderão ser iniciados quando:

- A aplicação estiver acessível localmente.
- O formulário de cadastro estiver disponível.
- Os campos Nome, Idade, Cargo e Status estiverem funcionais.
- O campo de pesquisa estiver disponível.
- O Playwright estiver instalado e configurado.
- O LocalStorage estiver disponível no navegador.
- As regras de negócio estiverem implementadas.
- A suíte de testes estiver configurada corretamente.

---

## 10. Critérios de Saída

O ciclo de testes será considerado concluído quando:

- Todos os cenários planejados forem executados.
- Todos os testes automatizados estiverem passando.
- Nenhum teste crítico permanecer falhando.
- A execução ocorrer nos três navegadores suportados.
- O relatório HTML for gerado com sucesso.
- As evidências forem registradas quando necessário.

---

## 11. Cenários Automatizados

| ID | Cenário | Tipo | Status |
|----|----------|------|--------|
| CT-001 | Cadastrar usuário válido | Positivo | Automatizado |
| CT-002 | Não cadastrar usuário com campos obrigatórios vazios | Negativo | Automatizado |
| CT-003 | Não cadastrar menor de idade como Ativo | Negativo | Automatizado |
| CT-004 | Cadastrar menor de idade como Inativo | Positivo | Automatizado |
| CT-005 | Editar usuário cadastrado | Positivo | Automatizado |
| CT-006 | Excluir usuário cadastrado | Positivo | Automatizado |
| CT-007 | Pesquisar usuário existente | Positivo | Automatizado |
| CT-008 | Pesquisar usuário inexistente | Negativo | Automatizado |
| CT-009 | Manter usuário cadastrado após atualizar a página | Positivo | Automatizado |
| CT-010 | Manter usuário editado após atualizar a página | Positivo | Automatizado |
| CT-011 | Manter usuário excluído após atualizar a página | Positivo | Automatizado |
| CT-012 | Exibir mensagem de sucesso ao cadastrar usuário válido | Positivo | Automatizado |
| CT-013 | Exibir mensagem de erro ao tentar cadastrar sem preencher campos | Negativo | Automatizado |

---

## 12. Estratégia de Automação

A automação foi estruturada por funcionalidades da aplicação, garantindo rastreabilidade entre Regras de Negócio (RN), Requisitos Funcionais (RF), User Stories (US) e Casos de Teste (CT).

Fluxo geral dos testes:

1. Preparação do ambiente de teste.
2. Execução do cenário correspondente.
3. Validação das regras de negócio.
4. Validação das mensagens apresentadas.
5. Validação da interface.
6. Validação da persistência dos dados (quando aplicável).
7. Execução nos navegadores Chromium, Firefox e WebKit.

---

## 13. Riscos

| Risco | Impacto |
|--------|----------|
| Alteração dos identificadores (IDs) dos elementos HTML | Pode invalidar os localizadores utilizados nos testes |
| Alteração nas mensagens da aplicação | Pode causar falhas nas validações automatizadas |
| Mudança nas regras de negócio | Pode invalidar cenários automatizados |
| Alteração no comportamento do LocalStorage | Pode comprometer os testes de persistência |
| Diferenças entre navegadores | Pode ocasionar falhas específicas em ambientes distintos |

---

## 14. Métricas

| Métrica | Valor Atual |
|----------|-------------|
| Total de cenários automatizados | 13 |
| Total de testes Playwright | 45 |
| Navegadores validados | 3 |
| Testes passando | 45 |
| Testes falhando | 0 |
| Cobertura funcional | Cadastro, Edição, Exclusão, Pesquisa, Persistência e Feedback |
| Navegadores | Chromium, Firefox e WebKit |
| Tempo médio de execução | Aproximadamente 1 minuto |

---

## 15. Resultado Atual

A suíte automatizada foi executada com sucesso nos navegadores Chromium, Firefox e WebKit.

Resultado da última execução:

```text
45 testes executados
45 testes aprovados
0 falhas

Execução concluída com sucesso nos navegadores Chromium, Firefox e WebKit.
```

---

## 16. Evidências

As evidências de execução incluem:

- Relatório HTML do Playwright.
- Capturas de tela da execução da suíte.
- Resultado consolidado da execução.
- Execução validada nos navegadores Chromium, Firefox e WebKit.

---

## 17. Próximas Melhorias

- Integração com GitHub Actions.
- Implementação de relatórios Allure.
- Captura automática de screenshots em falhas.
- Gravação de vídeos das execuções.
- Utilização do Trace Viewer do Playwright.
- Execução via servidor HTTP local.
- Testes de acessibilidade.
- Integração futura com API REST.
- Dashboard para métricas de testes.
- Refatoração para Page Object Model (POM).
