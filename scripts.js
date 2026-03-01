
const fotosFeminino = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg"
];

const fotosMasculino = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg"
];


const pastas = {
  feminino: "feminino/",
  masculino: "masculino/"
};


function mostrarProdutos() {
  
  const containerF = document.getElementById("produtos-feminino");
  fotosFeminino.forEach(nomeArquivo => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = 
      <img src="${pastas.feminino}${nomeArquivo}" alt="${nomeArquivo}">
      <button onclick="comprar('${nomeArquivo}')">Comprar</button>
    ;
    containerF.appendChild(div);
  });

  // Masculino
  const containerM = document.getElementById("produtos-masculino");
  fotosMasculino.forEach(nomeArquivo => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = 
      <img src="${pastas.masculino}${nomeArquivo}" alt="${nomeArquivo}">
      <button onclick="comprar('${nomeArquivo}')">Comprar</button>
    ;
    containerM.appendChild(div);
  });
}

// Função para abrir aba
function abrirAba(nomeAba) {
  document.querySelectorAll('.conteudo-aba').forEach(aba => aba.style.display = 'none');
  document.getElementById(nomeAba).style.display = 'block';
}


function comprar(nomeArquivo) {
  const numeroWhats = "5591999999999"; 
  const texto = Olá! Quero comprar: ${nomeArquivo};
  window.open(https:
}


mostrarProdutos();
