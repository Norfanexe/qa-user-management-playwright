// Estrutura principal responsável por armazenar os usuários cadastrados.
let usuarios = [];

// Captura o botão de cadastro na interface.
const botaoCadastrar = document.getElementById("btnCadastrar");

// Evento disparado ao clicar em "Cadastrar".
botaoCadastrar.addEventListener("click", () => {

    // Captura os valores informados pelo usuário no formulário.
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const ativo = document.getElementById("ativo").value;

    // Criação do objeto usuário.
    // Aplicação dos conceitos:
    // - Objetos
    // - Conversão de tipos (String -> Number)
    // - Booleanos
    const usuario = {
        nome: nome,
        idade: Number(idade),
        cargo: cargo,
        ativo: ativo === "true"
    };

    // RN-001, RN-002 e RN-003
    // Todos os campos obrigatórios devem ser preenchidos.
    if (nome === "" || idade === "" || cargo === "") {

        document.getElementById("mensagem").textContent =
            "Erro: preencha todos os campos.";

        return;
    }

    // RN-004
    // Usuários menores de 18 anos não podem ser cadastrados como Ativos.
    if (
        Number(idade) < 18 &&
        ativo === "true"
    ) {

        document.getElementById("mensagem").textContent =
            "Erro: menores de idade não podem ser ativos.";

        return;
    }

    // Inclusão do usuário no array principal.
    // Conceito aplicado:
    // - Arrays
    // - Método push()
    usuarios.push(usuario);

    // Atualiza a interface após novo cadastro.
    atualizarLista();

    // Feedback visual para o usuário.
    document.getElementById("mensagem").textContent =
        "Usuário cadastrado com sucesso.";

});

// Responsável por reconstruir a lista de usuários exibida na tela.
const atualizarLista = () => {

    const lista = document.getElementById("listaUsuarios");

    // Limpa a lista antes de renderizar novamente.
    // Evita duplicação visual dos registros.
    lista.innerHTML = "";

    // Percorre todos os usuários cadastrados.
    // Conceitos aplicados:
    // - for...of
    // - Arrays de Objetos
    for (const usuario of usuarios) {

        const item = document.createElement("li");

        // Operador ternário utilizado para exibição amigável do status.
        item.textContent =
            `${usuario.nome} - ${usuario.idade} anos - ${usuario.cargo} - ${usuario.ativo ? "Ativo" : "Inativo"}`;

        lista.appendChild(item);

    }

};

