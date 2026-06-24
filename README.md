# QA User Management Playwright

![Playwright](https://img.shields.io/badge/Playwright-E2E-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Tests-24%20Passed-success)

## 📋 Objetivo

Projeto desenvolvido para demonstrar conhecimentos em Qualidade de Software (QA), Automação de Testes E2E com Playwright e desenvolvimento de regras de negócio utilizando JavaScript.

O sistema simula o cadastro de usuários e possui validações funcionais implementadas tanto na aplicação quanto na suíte automatizada de testes.

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
│   └── casos-de-teste.md
│
├── evidencias
│
├── tests
│   └── cadastro-usuario.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```
---

## 🚀 Tecnologias Utilizadas

* JavaScript
* HTML5
* CSS3
* Node.js
* Playwright
* GitHub Actions (em evolução)
* VS Code

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

## 📊 Resultado Atual

A suíte automatizada foi executada com sucesso nos navegadores Chromium, Firefox e WebKit.

```text
24 execuções realizadas
24 passed
0 failed
Tempo total: 20.7s

## 🎯 Objetivos de Aprendizado

* Automação de testes E2E
* Estruturação de projetos QA
* Criação de cenários positivos e negativos
* Documentação de testes
* Boas práticas de qualidade de software
* Integração futura com CI/CD

---

## 🔮 Próximas Melhorias

* Execução em Chromium, Firefox e WebKit
* Integração com GitHub Actions
* Captura automática de screenshots
* Evidências em vídeo
* Testes de regressão completos
* Testes de acessibilidade
* Integração com API REST
* Persistência de dados
* Dashboard de métricas de testes

---

## 👨‍💻 Autor

Rodrigo Pereira Costa

QA Analyst | Quality Assurance | Automação de Testes

LinkedIn:
https://www.linkedin.com/in/rodrigo-pereira-049465179/

GitHub:
https://github.com/Norfanexe
