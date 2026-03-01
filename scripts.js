const produtos = [
  
  { nome: "Vestido Floral", preco: "R$79,90", imagem: "imagens/vestido-floral.jpg", genero: "feminino", tipo: "vestido" },
  { nome: "Blusa Elegante", preco: "R$69,90", imagem: "imagens/blusa-elegante.jpg", genero: "feminino", tipo: "blusa" },
  { nome: "Saia Midi", preco: "R$89,90", imagem: "imagens/saia-midi.jpg", genero: "feminino", tipo: "bermuda" },
  { nome: "Conjunto Verão", preco: "R$119,90", imagem: "imagens/conjunto-verao.jpg", genero: "feminino", tipo: "conjunto" },

 
  { nome: "Camisa Social", preco: "R$79,90", imagem: "imagens/camisa-social.jpg", genero: "masculino", tipo: "camisa" },
  { nome: "Bermuda Jeans", preco: "R$69,90", imagem: "imagens/bermuda-jeans.jpg", genero: "masculino", tipo: "bermuda" },
  { nome: "Conjunto Esportivo", preco: "R$119,90", imagem: "imagens/conjunto-esportivo.jpg", genero: "masculino", tipo: "conjunto" }
];


function mostrarProdutos() {
  produtos.forEach(p => {
    let containerId = "";

    if (p.genero === "feminino") {
      if (p.tipo === "vestido") containerId = "produtos-vestidos";
      if (p.tipo === "blusa") containerId = "produtos-blusas";
      if (p.tipo === "bermuda") containerId = "produtos-bermudas";
      if (p.tipo === "conjunto") containerId = "produtos-conjuntos";
    } else {
      if (p.tipo === "camisa") containerId = "produtos-camisas";
      if (p.tipo === "bermuda") containerId = "produtos-bermudas-masc";
      if (p.tipo === "conjunto") containerId = "produtos-conjuntos-masc";
    }

    const container = document.getElementById(containerId);
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = 
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="nome">${p.nome}</div>
      <div class="preco">${p.preco}</div>
      <button onclick="comprar('${p.nome}', '${p.preco}')">Comprar</button>
    ;
    container.appendChild(div);
  });
}


function abrirAba(nomeAba) {
  document.querySelectorAll('.conteudo-aba').forEach(aba => aba.style.display = 'none');
  document.getElementById(nomeAba).style.display = 'block';
}


function comprar(nome, preco) {
  const numeroWhats = "5591999999999"; 
  const texto = Olá! Quero comprar: ${nome} - ${preco};
  window.open(https:// lembra de colocar o link do zaqui seu animal
}


mostrarProdutos();
