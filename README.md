# QA User Management Playwright

![Playwright](https://img.shields.io/badge/Playwright-E2E_Testing-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-blue)
![Status](https://img.shields.io/badge/Tests-24_Passed-success)
![Browsers](https://img.shields.io/badge/Browsers-Chromium_|_Firefox_|_WebKit-orange)

Projeto desenvolvido para demonstrar práticas de Qualidade de Software (QA), Automação E2E com Playwright e Integração Contínua utilizando GitHub Actions.

## 📑 Sumário

* [📋 Objetivo](#-objetivo)
* [⭐ Destaques do Projeto](#-destaques-do-projeto)
* [📁 Estrutura do Projeto](#-estrutura-do-projeto)
* [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [🖥️ Ambiente de Teste](#️-ambiente-de-teste)
* [▶️ Como Executar](#️-como-executar)

  * [Instalar Dependências](#instalar-dependências)
  * [Executar Testes](#executar-testes)
  * [Executar Apenas Chromium](#executar-apenas-chromium)
  * [Abrir Relatório HTML](#abrir-relatório-html)
* [📖 Regras de Negócio](#-regras-de-negócio)
* [📚 Distribuição por User Story](#-distribuição-por-user-story)

  * [US-001 - Cadastrar Usuário](#us-001---cadastrar-usuário)
  * [US-002 - Exibir Mensagens ao Usuário](#us-002---exibir-mensagens-ao-usuário)
  * [US-003 - Gerenciar Lista de Usuários](#us-003---gerenciar-lista-de-usuários)
* [📋 Casos de Teste](#-casos-de-teste)
* [🎯 Estratégia Adotada para os Casos de Teste](#-estratégia-adotada-para-os-casos-de-teste)
* [🧪 Cenários Automatizados](#-cenários-automatizados)

  * [Cadastro de Usuários](#cadastro-de-usuários)
  * [Mensagens do Sistema](#mensagens-do-sistema)
  * [Lista de Usuários](#lista-de-usuários)
* [📈 Métricas de Qualidade](#-métricas-de-qualidade)
* [📊 Resultado Atual](#-resultado-atual)
* [📸 Evidências](#-evidências)
* [🔄 Integração Contínua (CI/CD)](#-integração-contínua-cicd)
* [✅ Conclusão](#-conclusão)
* [🙏 Agradecimentos](#-agradecimentos)
* [👨‍💻 Autor](#-autor)


---
## 📋 Objetivo

Projeto desenvolvido para demonstrar conhecimentos em Qualidade de Software (QA), Automação de Testes End-to-End (E2E) com Playwright, documentação de testes e integração contínua utilizando GitHub Actions.

A aplicação simula um sistema de cadastro de usuários contendo regras de negócio, validações funcionais e uma suíte automatizada executada em múltiplos navegadores.

O projeto foi estruturado seguindo práticas utilizadas em ambientes corporativos de QA, contemplando documentação funcional, casos de teste, automação, métricas e pipeline CI/CD.

---
## ⭐ Destaques do Projeto

- ✅ Aplicação Web desenvolvida em JavaScript
- ✅ Automação E2E utilizando Playwright
- ✅ Execução Cross-Browser (Chromium, Firefox e WebKit)
- ✅ Integração Contínua com GitHub Actions
- ✅ Plano de Testes
- ✅ Casos de Teste
- ✅ Bug Report
- ✅ Métricas de Qualidade
- ✅ Relatórios HTML Automatizados
- ✅ Estrutura baseada em práticas de QA

---
## 📁 Estrutura do Projeto

```text
qa-user-management-playwright
│
├── app
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── docs
│   ├── plano-de-testes.md
│   ├── casos-de-teste.md
│   └── exemplo-bug-report.md
│
├── evidencias
│   ├── cadastro-valido.png
│   ├── cadastro-invalido.png
│   ├── relatorio-playwright-chromium.png
│   ├── relatorio-playwright-firefox.png
│   └── relatorio-playwright-webkit.png
│
├── tests
│   └── cadastro-usuario.spec.js
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md

```
---
## 🚀 Tecnologias Utilizadas

* JavaScript
* HTML5
* CSS3
* Node.js
* Playwright
* GitHub Actions (CI/CD)
* VS Code

---
## 🖥️ Ambiente de Teste

| Item                   | Descrição                  |
| ---------------------- | -------------------------- |
| Sistema Operacional    | Windows 11                 |
| Linguagem              | JavaScript (ES6)           |
| Framework de Automação | Playwright                 |
| Ambiente de Execução   | Local                      |
| Navegadores Validados  | Chromium, Firefox e WebKit |
| Gerenciador de Pacotes | NPM                        |
| Controle de Versão     | Git                        |
| Repositório            | GitHub                     |
| Integração Contínua    | GitHub Actions             |

---
## ▶️ Como Executar

### Instalar dependências

```bash
npm install
```

### Executar testes

```bash
npx playwright test
```

### Executar apenas Chromium

```bash
npx playwright test --project=chromium
```

### Abrir relatório HTML

```bash
npx playwright show-report
```

---
## 📖 Regras de Negócio

### RN-001

Nome é obrigatório.

### RN-002

Idade é obrigatória.

### RN-003

Cargo é obrigatório.

### RN-004

Usuários menores de 18 anos não podem ser cadastrados com status **Ativo**.

### RN-005

Usuários válidos devem ser exibidos na lista.

### RN-006

Usuários inválidos não devem ser exibidos na lista.

### RN-007

O sistema deve exibir mensagem de sucesso para cadastros válidos.

### RN-008

O sistema deve exibir mensagem de erro para cadastros inválidos.

---
## 📚 Distribuição por User Story

### US-001 - Cadastrar Usuário

**Como** operador do sistema

**Quero** cadastrar usuários

**Para** mantê-los disponíveis para consulta na plataforma.

#### Cenários Relacionados

* CT-001
* CT-002
* CT-003
* CT-004

### US-002 - Exibir Mensagens ao Usuário

**Como** operador do sistema

**Quero** receber feedback visual após minhas ações

**Para** saber se o cadastro foi realizado com sucesso ou erro.

#### Cenários Relacionados

* CT-005
* CT-006

### US-003 - Gerenciar Lista de Usuários

**Como** operador do sistema

**Quero** visualizar apenas registros válidos

**Para** garantir a consistência das informações exibidas.

#### Cenários Relacionados

* CT-007
* CT-008

---
## 📋 Casos de Teste

Os casos de teste detalhados estão documentados no arquivo:

```text
docs/casos-de-teste.md
```

| ID     | Cenário                        |
| ------ | ------------------------------ |
| CT-001 | Cadastro de usuário válido     |
| CT-002 | Cadastro com campos vazios     |
| CT-003 | Menor de idade ativo           |
| CT-004 | Menor de idade inativo         |
| CT-005 | Mensagem de sucesso            |
| CT-006 | Mensagem de erro               |
| CT-007 | Usuário válido na lista        |
| CT-008 | Usuário inválido fora da lista |

---
## 🎯 Estratégia Adotada para os Casos de Teste

A estratégia de testes foi baseada na validação das principais regras de negócio do sistema, priorizando cenários críticos para o fluxo de cadastro de usuários.

Foram adotadas as seguintes abordagens:

* Testes Positivos (fluxos válidos)
* Testes Negativos (validação de bloqueios e erros)
* Testes Funcionais
* Testes End-to-End (E2E)
* Testes de Regressão
* Testes Cross-Browser

A cobertura foi construída considerando:

* Entradas válidas
* Entradas inválidas
* Campos obrigatórios
* Restrições de idade
* Mensagens exibidas ao usuário
* Integridade da listagem de usuários

---
## 🧪 Cenários Automatizados

### Cadastro de Usuários

* ✅ Deve cadastrar usuário válido
* ✅ Não deve cadastrar usuário com campos vazios
* ✅ Não deve cadastrar menor de idade como ativo
* ✅ Deve cadastrar menor de idade como inativo

### Mensagens do Sistema

* ✅ Deve exibir mensagem de sucesso ao cadastrar usuário válido
* ✅ Deve exibir mensagem de erro ao tentar cadastrar sem preencher campos

### Lista de Usuários

* ✅ Usuário válido deve aparecer na lista
* ✅ Usuário inválido não deve aparecer na lista

---
## 📈 Métricas de Qualidade

| Métrica                         | Resultado                   |
| ------------------------------- | --------------------------- |
| Total de Cenários Automatizados | 8                           |
| Total de Execuções              | 24                          |
| Testes Aprovados                | 24                          |
| Testes Falhando                 | 0                           |
| Taxa de Sucesso                 | 100%                        |
| Navegadores Validados           | 3                           |
| Cobertura Funcional             | Cadastro, Mensagens e Lista |
| Bugs Críticos Encontrados       | 0                           |
| Pipeline CI/CD                  | Ativa                       |

---
## 📊 Resultado Atual

| Métrica | Resultado |
|----------|------------|
| Execuções Totais | 24 |
| Testes Aprovados | 24 |
| Testes Falhando | 0 |
| Taxa de Sucesso | 100% |
| Tempo Total de Execução | 20.7s |
| Navegadores Validados | Chromium, Firefox e WebKit |

---
## 📸 Evidências

O projeto possui evidências das execuções realizadas durante os testes automatizados.

### Evidências Disponíveis

- Cadastro válido
- Cadastro inválido
- Relatório Chromium
- Relatório Firefox
- Relatório WebKit

Localização:

```text
evidencias/
```

---
## 🔄 Integração Contínua (CI/CD)

O projeto possui pipeline automatizada através do GitHub Actions.

A cada push realizado na branch principal, o workflow executa automaticamente:

- Instalação das dependências
- Instalação dos navegadores Playwright
- Execução da suíte automatizada
- Geração de artefatos
- Publicação dos resultados da execução

---
### Status Atual

✅ Pipeline operacional

✅ GitHub Actions configurado

✅ Execução automatizada dos testes

✅ Integração contínua validada

✅ Relatórios gerados automaticamente

---
## ✅ Conclusão

O projeto atingiu com sucesso os objetivos propostos para a primeira fase de desenvolvimento e automação.

Foram implementadas regras de negócio, documentação de QA, automação E2E utilizando Playwright, execução Cross-Browser e integração contínua através do GitHub Actions.

A suíte automatizada demonstrou estabilidade durante as execuções realizadas, obtendo 100% de sucesso nos cenários planejados.

Este projeto representa uma base sólida para evolução futura envolvendo testes de API, persistência de dados, métricas avançadas e expansão da cobertura automatizada.

---
## 🙏 Agradecimentos

Agradeço a todos os profissionais da comunidade de Qualidade de Software e Automação de Testes que compartilham conhecimento e contribuem para o crescimento contínuo da área.E principalmente à dedicação contínua ao aprendizado, prática e evolução profissional em Qualidade de Software.

---
## 👨‍💻 Autor

Rodrigo Pereira Costa

QA Analyst | Quality Assurance | Automação de Testes

### LinkedIn

https://www.linkedin.com/in/rodrigo-pereira-049465179/

### GitHub

https://github.com/Norfanexe