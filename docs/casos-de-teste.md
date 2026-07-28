# Casos de Teste - Cadastro de Usuários

# Casos de Teste - Cadastro de Usuários

## Módulo: Cadastro de Usuários

| ID     | Cenário                                              | Tipo     | Prioridade | Massa de Dados                                            | Resultado Esperado                                                                                         | Status |
| ------ | ---------------------------------------------------- | -------- | ---------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| CT-001 | Cadastrar usuário válido                             | Positivo | Alta       | Nome: Rodrigo; Idade: 25; Cargo: QA; Status: Ativo        | O sistema deve cadastrar o usuário, exibir mensagem de sucesso e adicioná-lo à lista.                      | Passou |
| CT-002 | Não cadastrar usuário com campos obrigatórios vazios | Negativo | Alta       | Nome: vazio; Idade: vazio; Cargo: vazio                   | O sistema deve exibir a mensagem "Erro: preencha todos os campos." e não cadastrar o usuário.              | Passou |
| CT-003 | Não cadastrar menor de idade como ativo              | Negativo | Alta       | Nome: João; Idade: 17; Cargo: Estagiário; Status: Ativo   | O sistema deve exibir a mensagem "Erro: menores de idade não podem ser ativos." e não cadastrar o usuário. | Passou |
| CT-004 | Cadastrar menor de idade como inativo                | Positivo | Média      | Nome: João; Idade: 17; Cargo: Estagiário; Status: Inativo | O sistema deve cadastrar o usuário como Inativo e exibir mensagem de sucesso.                              | Passou |


## Módulo: Editar Usuário

| ID     | Cenário                   | Tipo     | Prioridade | Massa de Dados                                    | Resultado Esperado                                                         | Status |
| ------ | ------------------------- | -------- | ---------- | ------------------------------------------------- | -------------------------------------------------------------------------- | ------ |
| CT-005 | Editar usuário cadastrado | Positivo | Alta       | Rodrigo → Rodrigo Pereira; 25 → 26; QA → QA Pleno | O sistema deve atualizar os dados do usuário e exibir mensagem de sucesso. | Passou |

## Módulo: Excluir Usuário

| ID     | Cenário                    | Tipo     | Prioridade | Massa de Dados                 | Resultado Esperado                                                      | Status |
| ------ | -------------------------- | -------- | ---------- | ------------------------------ | ----------------------------------------------------------------------- | ------ |
| CT-006 | Excluir usuário cadastrado | Positivo | Alta       | Usuário previamente cadastrado | O sistema deve remover o usuário da lista e exibir mensagem de sucesso. | Passou |

## Módulo: Pesquisar Usuário

| ID     | Cenário                       | Tipo     | Prioridade | Massa de Dados     | Resultado Esperado                                                         | Status |
| ------ | ----------------------------- | -------- | ---------- | ------------------ | -------------------------------------------------------------------------- | ------ |
| CT-007 | Pesquisar usuário existente   | Positivo | Alta       | Pesquisa: Julia    | O sistema deve exibir apenas o usuário correspondente ao termo pesquisado. | Passou |
| CT-008 | Pesquisar usuário inexistente | Negativo | Média      | Pesquisa: Fernando | O sistema deve exibir a mensagem "Nenhum usuário encontrado.".             | Passou |


## Módulo: Persistência de Dados

| ID     | Cenário                                           | Tipo     | Prioridade | Massa de Dados                 | Resultado Esperado                                                            | Status |
| ------ | ------------------------------------------------- | -------- | ---------- | ------------------------------ | ----------------------------------------------------------------------------- | ------ |
| CT-009 | Manter usuário cadastrado após atualizar a página | Positivo | Alta       | Usuário previamente cadastrado | O usuário deve permanecer na lista após o recarregamento da aplicação.        | Passou |
| CT-010 | Manter usuário editado após atualizar a página    | Positivo | Alta       | Usuário previamente editado    | As alterações realizadas devem permanecer após o recarregamento da aplicação. | Passou |
| CT-011 | Manter usuário excluído após atualizar a página   | Positivo | Alta       | Usuário previamente excluído   | O usuário não deve reaparecer após o recarregamento da aplicação.             | Passou |


## Módulo: Mensagens do Sistema

| ID     | Cenário                                                          | Tipo     | Prioridade | Massa de Dados                                    | Resultado Esperado                                                  | Status |
| ------ | ---------------------------------------------------------------- | -------- | ---------- | ------------------------------------------------- | ------------------------------------------------------------------- | ------ |
| CT-012 | Exibir mensagem de sucesso ao cadastrar usuário válido           | Positivo | Alta       | Nome: Maria; Idade: 30; Cargo: DEV; Status: Ativo | O sistema deve exibir a mensagem "Usuário cadastrado com sucesso.". | Passou |
| CT-013 | Exibir mensagem de erro ao tentar cadastrar sem preencher campos | Negativo | Alta       | Nome: vazio; Idade: vazio; Cargo: vazio           | O sistema deve exibir a mensagem "Erro: preencha todos os campos.". | Passou |
