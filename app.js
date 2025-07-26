//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
const input = document.querySelector("#amigo");
const botaoSortear = document.querySelector(".button-draw");

function adicionarAmigo() {
  const amigo = input.value.trim();
  if (amigo && !amigos.includes(amigo)) {
    amigos.push(amigo);
    input.value = "";
    atualizarLista();
  } else {
    alert("Por favor, insira um nome válido e único.");
  }
}

function atualizarLista() {
  const lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, adicione pelo menos um amigo para sortear.");
    return;
  } else {
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirSorteado(amigoSorteado);
  }
}

function exibirSorteado(amigo) {
  const resultado = document.querySelector("#resultado");

  const li = document.createElement("li");
  li.textContent = `Amigo Sorteado: ${amigo}`;
  resultado.appendChild(li);
  botaoSortear.disabled = true;
  botaoSortear.textContent = "Sorteado";
  botaoSortear.style.backgroundColor = "gray";
  botaoSortear.style.text = "center";
}
