let usuarios = carregarUsuarios();
let usuarioEmEdicao = null;

const botaoCadastrar =
    document.getElementById("btnCadastrar");

const limparFormulario = () => {

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("ativo").value = "true";

};

const campoPesquisa = document.getElementById("pesquisaUsuario");

campoPesquisa.addEventListener("input", () => {
    atualizarLista();
});

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
if (usuarioEmEdicao) {

    const indice = usuarios.findIndex(
        usuario => usuario.id === usuarioEmEdicao
    );

    usuarios[indice] = {
        id: usuarioEmEdicao,
        nome,
        idade: Number(idade),
        cargo,
        ativo: ativo === "true"
    };

    usuarioEmEdicao = null;

    botaoCadastrar.textContent =
        "Cadastrar";

    document.getElementById("mensagem").textContent =
        "Usuário atualizado com sucesso.";

    limparFormulario();

} else {

    usuarios.push(usuario);

    document.getElementById("mensagem").textContent =
        "Usuário cadastrado com sucesso.";

    limparFormulario();

}

salvarUsuarios(usuarios);
atualizarLista();


});

const editarUsuario = (id) => {

    const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    if (!usuario) {
        return;
    }

    document.getElementById("nome").value =
        usuario.nome;

    document.getElementById("idade").value =
        usuario.idade;

    document.getElementById("cargo").value =
        usuario.cargo;

    document.getElementById("ativo").value =
        usuario.ativo.toString();

    usuarioEmEdicao = id;

    botaoCadastrar.textContent =
        "Salvar Alterações";

};

// Responsável por reconstruir a lista de usuários exibida na tela.
const atualizarLista = () => {

    const lista = document.getElementById("listaUsuarios");

    const termoPesquisa =
    campoPesquisa.value.toLowerCase();

    lista.innerHTML = "";

    const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nome.toLowerCase().includes(termoPesquisa) ||
    usuario.cargo.toLowerCase().includes(termoPesquisa)
);

if (usuariosFiltrados.length === 0) {

    lista.innerHTML =
        "<li>Nenhum usuário encontrado.</li>";

    return;
}

    for (const usuario of usuariosFiltrados)  {

        const item = document.createElement("li");

        const textoUsuario = document.createElement("span");

        textoUsuario.textContent =
            `${usuario.nome} - ${usuario.idade} anos - ${usuario.cargo} - ${usuario.ativo ? "Ativo" : "Inativo"} `;

        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";

        botaoEditar.addEventListener("click", () => {
            editarUsuario(usuario.id);
        });

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";

        botaoExcluir.addEventListener("click", () => {
            excluirUsuario(usuario.id);
        });

        item.appendChild(textoUsuario);
        item.appendChild(botaoEditar);
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
