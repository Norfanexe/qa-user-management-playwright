# Casos de Teste - Cadastro de Usuários

## Módulo: Cadastro de Usuários

| ID     | Cenário                                     | Tipo     | Prioridade | Massa de Dados                                            | Resultado Esperado                                                                                                 | Status |
| ------ | ------------------------------------------- | -------- | ---------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| CT-001 | Cadastrar usuário válido                    | Positivo | Alta       | Nome: Rodrigo; Idade: 25; Cargo: QA; Status: Ativo        | O sistema deve exibir mensagem de sucesso e adicionar o usuário na lista como Ativo                                | Passou |
| CT-002 | Bloquear cadastro com campos vazios         | Negativo | Alta       | Nome: vazio; Idade: vazio; Cargo: vazio                   | O sistema deve exibir a mensagem "Erro: preencha todos os campos." e não adicionar usuário na lista                | Passou |
| CT-003 | Bloquear menor de idade com status Ativo    | Negativo | Alta       | Nome: João; Idade: 17; Cargo: Estagiário; Status: Ativo   | O sistema deve exibir a mensagem "Erro: menores de idade não podem ser ativos." e não adicionar o usuário na lista | Passou |
| CT-004 | Cadastrar menor de idade com status Inativo | Positivo | Média      | Nome: João; Idade: 17; Cargo: Estagiário; Status: Inativo | O sistema deve exibir mensagem de sucesso e adicionar o usuário na lista como Inativo                              | Passou |

---

## Módulo: Mensagens do Sistema

| ID     | Cenário                                                          | Tipo     | Prioridade | Massa de Dados                                    | Resultado Esperado                                                 | Status |
| ------ | ---------------------------------------------------------------- | -------- | ---------- | ------------------------------------------------- | ------------------------------------------------------------------ | ------ |
| CT-005 | Exibir mensagem de sucesso ao cadastrar usuário válido           | Positivo | Alta       | Nome: Maria; Idade: 30; Cargo: DEV; Status: Ativo | O sistema deve exibir a mensagem "Usuário cadastrado com sucesso." | Passou |
| CT-006 | Exibir mensagem de erro ao tentar cadastrar sem preencher campos | Negativo | Alta       | Nome: vazio; Idade: vazio; Cargo: vazio           | O sistema deve exibir a mensagem "Erro: preencha todos os campos." | Passou |

---

## Módulo: Lista de Usuários

| ID     | Cenário                              | Tipo     | Prioridade | Massa de Dados                                           | Resultado Esperado                                                           | Status |
| ------ | ------------------------------------ | -------- | ---------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- | ------ |
| CT-007 | Exibir usuário válido na lista       | Positivo | Alta       | Nome: Carlos; Idade: 40; Cargo: PO; Status: Ativo        | O usuário deve ser exibido na lista com nome, idade, cargo e status corretos | Passou |
| CT-008 | Não exibir usuário inválido na lista | Negativo | Alta       | Nome: Pedro; Idade: 15; Cargo: Estagiário; Status: Ativo | O usuário não deve ser exibido na lista após tentativa de cadastro inválida  | Passou |
