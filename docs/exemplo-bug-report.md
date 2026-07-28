# Exemplo de Bug Report

> Este documento representa um defeito simulado criado para demonstrar conhecimentos em documentação de bugs e processo de Quality Assurance.
>
> O cenário foi construído a partir de uma alteração hipotética na regra de negócio do projeto.

---

# BUG-001 - Sistema permite usuário menor de idade ser cadastrado como Ativo

## Informações Gerais

| Campo | Valor |
|---------|---------|
| ID | BUG-001 |
| Título | Sistema permite usuário menor de idade ser cadastrado como Ativo |
| Módulo | Cadastro de Usuários |
| Ambiente | Desenvolvimento |
| Navegador | Chromium |
| Prioridade | Alta |
| Severidade | Alta |
| Status | Aberto (Simulado) |

---

## Descrição

O sistema está permitindo que usuários menores de 18 anos sejam cadastrados com status **Ativo**, contrariando a regra de negócio definida para o projeto.

---

## Regra de Negócio Afetada

### RN-004

> Usuários menores de 18 anos não podem ser cadastrados com status Ativo.

---

## Pré-Condições

- Sistema disponível para uso.
- Tela de cadastro carregada.
- Usuário não cadastrado anteriormente.

---

## Passos para Reprodução

### Passo 1

Preencher o campo Nome:

```text
João
```

### Passo 2

Preencher o campo Idade:

```text
17
```

### Passo 3

Preencher o campo Cargo:

```text
Estagiário
```

### Passo 4

Selecionar:

```text
Status = Ativo
```

### Passo 5

Clicar em:

```text
Cadastrar
```

---

## Resultado Atual

O sistema permite o cadastro normalmente.

Mensagem exibida:

```text
Usuário cadastrado com sucesso.
```

O usuário é exibido na lista.

---

## Resultado Esperado

O sistema deve bloquear o cadastro.

Mensagem esperada:

```text
Erro: menores de idade não podem ser ativos.
```

O usuário não deve ser exibido na lista.

---

## Impacto

O sistema passa a aceitar registros que violam uma regra de negócio crítica, comprometendo a integridade dos dados cadastrados.

---

## Evidência Esperada

Captura da tela demonstrando:

- Idade menor que 18 anos
- Status Ativo
- Cadastro realizado com sucesso (comportamento incorreto)

---

## Estratégia de Validação

O defeito pode ser validado através do teste automatizado:

```text
Não deve cadastrar menor de idade como ativo
```

Implementado em:

```text
tests/cadastro-usuario.spec.js
```

---

## Observação

Este defeito foi criado exclusivamente para demonstração de documentação de QA e não representa um problema real existente na versão atual do projeto.