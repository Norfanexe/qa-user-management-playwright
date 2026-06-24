// Estrutura principal responsável por armazenar os usuários cadastrados.
let usuarios = carregarUsuarios();

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
        id: Date.now(),
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

    salvarUsuarios(usuarios);
    atualizarLista();

    // Feedback visual para o usuário.
    document.getElementById("mensagem").textContent =
        "Usuário cadastrado com sucesso.";

});

// Responsável por reconstruir a lista de usuários exibida na tela.
const atualizarLista = () => {

    const lista = document.getElementById("listaUsuarios");

    lista.innerHTML = "";

    for (const usuario of usuarios) {

        const item = document.createElement("li");

        const textoUsuario = document.createElement("span");

        textoUsuario.textContent =
            `${usuario.nome} - ${usuario.idade} anos - ${usuario.cargo} - ${usuario.ativo ? "Ativo" : "Inativo"} `;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";

        botaoExcluir.addEventListener("click", () => {
            excluirUsuario(usuario.id);
        });

        item.appendChild(textoUsuario);
        item.appendChild(botaoExcluir);

        lista.appendChild(item);
    }
};

const excluirUsuario = (id) => {
    usuarios = usuarios.filter(usuario => usuario.id !== id);

    salvarUsuarios(usuarios);
    atualizarLista();

    document.getElementById("mensagem").textContent =
        "Usuário excluído com sucesso.";
};

atualizarLista();
