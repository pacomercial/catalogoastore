const produtosFeminino = [
  { nome: "Vestido Floral", preco: "R$79,90", imagem: "imagens/vestido-floral.jpg" },
  { nome: "Blusa Elegante", preco: "R$69,90", imagem: "imagens/blusa-elegante.jpg" }
 
];

const produtosMasculino = [
  { nome: "Camisa Social", preco: "R$79,90", imagem: "imagens/camisa-social.jpg" },
  { nome: "Bermuda Jeans", preco: "R$69,90", imagem: "imagens/bermuda-jeans.jpg" }
  
];

function mostrarProdutos() {
  const containerF = document.getElementById("produtos-feminino");
  produtosFeminino.forEach(p => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = 
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="nome">${p.nome}</div>
      <div class="preco">${p.preco}</div>
      <button onclick="comprar('${p.nome}', '${p.preco}')">Comprar</button>
    ;
    containerF.appendChild(div);
  });

  const containerM = document.getElementById("produtos-masculino");
  produtosMasculino.forEach(p => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = 
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="nome">${p.nome}</div>
      <div class="preco">${p.preco}</div>
      <button onclick="comprar('${p.nome}', '${p.preco}')">Comprar</button>
    ;
    containerM.appendChild(div);
  });
}


function abrirAba(nomeAba) {
  document.querySelectorAll('.conteudo-aba').forEach(aba => aba.style.display = 'none');
  document.getElementById(nomeAba).style.display = 'block';
}


function comprar(nome, preco) {
  const numeroWhats = "5591999999999"; 
  const texto = Olá! Quero comprar: ${nome} - ${preco};
  window.open(https://coloca o link do zap aqui seu animal
}


mostrarProdutos();
