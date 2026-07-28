const STORAGE_KEY = "usuarios";

function salvarUsuarios(usuarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

function carregarUsuarios() {
    const dados = localStorage.getItem(STORAGE_KEY);

    return dados ? JSON.parse(dados) : [];
}