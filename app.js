let amigos = [];

// Função para adicionar o nome à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        nomeInput.value = "";  // Limpa o campo de input
        atualizarLista();
    } else {
        alert("Por favor, insira um nome de um participante.");
    }
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio de amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um participante.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
function novoJogo() {
    if (amigos.length === 0) {
        alert("Por favor, voçê deve iniciar o jogo.");
        return;
    }
    amigos = [];  // Limpa a lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";  // Limpa a exibição da lista
    document.getElementById("resultado").textContent = "";  // Limpa o resultado do sorteio
    document.getElementById("nomeInput").value = "";  // Limpa o campo de entrada de nome
}