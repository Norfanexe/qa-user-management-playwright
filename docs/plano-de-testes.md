# Plano de Testes - QA User Management Playwright

## 1. Objetivo

Validar o funcionamento do sistema de Cadastro de Usuários, garantindo que as principais regras de negócio sejam respeitadas e que os fluxos positivos e negativos estejam cobertos por testes automatizados E2E com Playwright.

---

## 2. Escopo

Serão testadas as funcionalidades de:

* Cadastro de usuário válido
* Validação de campos obrigatórios
* Bloqueio de usuário menor de idade com status Ativo
* Permissão de usuário menor de idade com status Inativo
* Exibição de mensagens de sucesso e erro
* Exibição correta de usuários cadastrados na lista
* Garantia de que usuários inválidos não sejam exibidos na lista
* Execução dos testes nos navegadores Chromium, Firefox e WebKit

---

## 3. Fora do Escopo

Não serão testados neste ciclo:

* Persistência em banco de dados
* Integração com API externa
* Login/autenticação
* Testes de performance
* Testes de acessibilidade
* Responsividade mobile
* Testes de segurança
* Integração com backend real

---

## 4. Regras de Negócio

| ID     | Regra                                                            |
| ------ | ---------------------------------------------------------------- |
| RN-001 | Nome é obrigatório                                               |
| RN-002 | Idade é obrigatória                                              |
| RN-003 | Cargo é obrigatório                                              |
| RN-004 | Usuários menores de 18 anos não podem ser cadastrados como Ativo |
| RN-005 | Usuários válidos devem ser exibidos na lista                     |
| RN-006 | Usuários inválidos não devem ser exibidos na lista               |
| RN-007 | O sistema deve exibir mensagem de sucesso em cadastros válidos   |
| RN-008 | O sistema deve exibir mensagem de erro em cadastros inválidos    |

---

## 5. Tipos de Teste

| Tipo                   | Aplicação                                                            |
| ---------------------- | -------------------------------------------------------------------- |
| Teste Funcional        | Validar regras de cadastro e listagem                                |
| Teste Positivo         | Validar fluxos permitidos pela regra de negócio                      |
| Teste Negativo         | Validar bloqueios e mensagens de erro                                |
| Teste Automatizado E2E | Simular interação real do usuário via Playwright                     |
| Teste de Regressão     | Garantir que regras existentes continuam funcionando após alterações |
| Teste Cross-Browser    | Validar comportamento em Chromium, Firefox e WebKit                  |

---

## 6. Ferramentas Utilizadas

| Ferramenta     | Finalidade                       |
| -------------- | -------------------------------- |
| JavaScript     | Desenvolvimento da aplicação     |
| HTML/CSS       | Interface do sistema             |
| Playwright     | Automação de testes E2E          |
| Node.js        | Execução do ambiente JavaScript  |
| VS Code        | Desenvolvimento e execução local |
| GitHub Actions | Execução futura em pipeline CI   |

---

## 7. Ambiente de Teste

| Item                | Descrição                  |
| ------------------- | -------------------------- |
| Sistema Operacional | Windows                    |
| Navegadores         | Chromium, Firefox e WebKit |
| Framework           | Playwright                 |
| Execução            | Local                      |
| Aplicação           | HTML local via file path   |
| Relatório           | Playwright HTML Report     |

---

## 8. Critérios de Entrada

Os testes podem iniciar quando:

* A aplicação estiver acessível localmente
* Os campos Nome, Idade, Cargo e Status estiverem disponíveis
* O botão Cadastrar estiver funcional
* O Playwright estiver instalado e configurado
* O arquivo de testes estiver dentro da pasta `tests`
* As regras de negócio estiverem implementadas na aplicação

---

## 9. Critérios de Saída

O ciclo de testes será considerado concluído quando:

* Todos os cenários planejados forem executados
* Todos os testes automatizados estiverem passando
* Os testes forem executados nos navegadores definidos
* Relatório HTML do Playwright for gerado
* Evidências forem registradas quando necessário
* Bugs encontrados forem documentados ou registrados como exemplo simulado

---

## 10. Cenários Automatizados

| ID     | Cenário                                                               | Tipo     | Status       |
| ------ | --------------------------------------------------------------------- | -------- | ------------ |
| CT-001 | Deve cadastrar usuário válido                                         | Positivo | Automatizado |
| CT-002 | Não deve cadastrar usuário com campos vazios                          | Negativo | Automatizado |
| CT-003 | Não deve cadastrar menor de idade como ativo                          | Negativo | Automatizado |
| CT-004 | Deve cadastrar menor de idade como inativo                            | Positivo | Automatizado |
| CT-005 | Deve exibir mensagem de sucesso ao cadastrar usuário válido           | Positivo | Automatizado |
| CT-006 | Deve exibir mensagem de erro ao tentar cadastrar sem preencher campos | Negativo | Automatizado |
| CT-007 | Usuário válido deve aparecer na lista                                 | Positivo | Automatizado |
| CT-008 | Usuário inválido não deve aparecer na lista                           | Negativo | Automatizado |

---

## 11. Estratégia de Automação

A automação será feita com Playwright, simulando o comportamento real do usuário na interface.

Fluxo padrão dos testes:

1. Acessar a aplicação
2. Preencher ou não preencher os campos conforme o cenário
3. Selecionar status do usuário
4. Clicar em Cadastrar
5. Validar mensagem exibida
6. Validar presença ou ausência do usuário na lista
7. Executar os testes nos navegadores Chromium, Firefox e WebKit

---

## 12. Riscos

| Risco                                         | Impacto                                       |
| --------------------------------------------- | --------------------------------------------- |
| Alteração nos IDs dos elementos HTML          | Pode quebrar os testes automatizados          |
| Mudança nas mensagens exibidas                | Pode gerar falhas nas validações              |
| Remoção de regras de negócio                  | Pode permitir cadastros inválidos             |
| Execução via file path                        | Pode exigir ajuste futuro para servidor local |
| Diferenças de comportamento entre navegadores | Pode gerar falhas cross-browser               |

---

## 13. Métricas

| Métrica                         | Valor Atual                 |
| ------------------------------- | --------------------------- |
| Total de cenários automatizados | 8                           |
| Navegadores validados           | 3                           |
| Total de execuções              | 24                          |
| Testes passando                 | 24                          |
| Testes falhando                 | 0                           |
| Cobertura funcional inicial     | Cadastro, Mensagens e Lista |
| Navegadores                     | Chromium, Firefox e WebKit  |
| Tempo total de execução         | 20.7s                       |

---

## 14. Resultado Atual

A suíte automatizada foi executada com sucesso nos navegadores Chromium, Firefox e WebKit.

Resultado:

```text
24 execuções realizadas
24 passed
0 failed
Tempo total: 20.7s
```

---

## 15. Evidências

As evidências de execução foram registradas na pasta `evidencias/`, incluindo prints dos resultados de execução nos navegadores:

* Chromium
* Firefox
* WebKit
* Relatório HTML do Playwright

---

## 16. Próximas Melhorias

* Integração com GitHub Actions
* Captura automática de screenshots
* Evidências em vídeo
* Testes de acessibilidade
* Integração futura com API REST
* Persistência de dados
* Dashboard de métricas de testes
* Execução futura via servidor local
