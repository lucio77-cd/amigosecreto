// Lista para armazenar os nomes
let nomes = [];

// Função chamada pelo botão Adicionar (onclick no botão)
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido.");
    return;
  }

  if (nomes.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  nomes.push(nome);
  input.value = "";
  atualizarLista();
}

// Atualiza a lista de nomes na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nomes.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Função chamada pelo botão Sortear amigo (onclick no botão)
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (nomes.length < 1) {
    alert("Adicione pelo menos um nome para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indice];

  resultado.textContent = `O amigo sorteado é: ${nomeSorteado}`;
}