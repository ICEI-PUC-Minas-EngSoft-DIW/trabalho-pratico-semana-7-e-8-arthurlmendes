// Estrutura de dados JSON com as IAs
const dados = [
  {
    id: 1,
    titulo: "ChatGPT",
    descricao: "Um dos modelos de linguagem mais avançados do mundo, criado pela OpenAI.",
    conteudo: "O ChatGPT é uma IA baseada em modelos de linguagem que utiliza aprendizado profundo para gerar textos coerentes e naturais. É amplamente usado em assistentes virtuais, educação e criação de conteúdo.",
    autor: "OpenAI",
    data: "2022-11-30",
   
  },
  {
    id: 2,
    titulo: "Midjourney",
    descricao: "IA especializada na criação de imagens artísticas a partir de texto.",
    conteudo: "A Midjourney utiliza redes neurais para interpretar descrições textuais e gerar imagens de alta qualidade. Tornou-se popular por criar arte digital impressionante e criativa.",
    autor: "Midjourney Inc.",
    data: "2022-07-15",
    
  },
  {
    id: 3,
    titulo: "GitHub Copilot",
    descricao: "Assistente de programação que sugere códigos automaticamente.",
    conteudo: "O GitHub Copilot, desenvolvido pela GitHub e OpenAI, usa IA para prever e sugerir trechos de código em tempo real, aumentando a produtividade de desenvolvedores.",
    autor: "GitHub e OpenAI",
    data: "2021-06-29",
    
  },
  {
    id: 4,
    titulo: "Google Gemini",
    descricao: "Plataforma de IA multimodal criada pelo Google DeepMind.",
    conteudo: "O Gemini combina texto, imagem, áudio e vídeo em um único modelo. É uma das principais apostas do Google na corrida das inteligências artificiais generativas.",
    autor: "Google DeepMind",
    data: "2024-01-10",
    
  }
];

// Detectar qual página está aberta
const pagina = window.location.pathname.split("/").pop();

if (pagina === "index.html" || pagina === "") {
  montarHome();
} else if (pagina === "detalhes.html") {
  montarDetalhes();
}

// Função para montar os cards na página inicial
function montarHome() {
  const conteudo = document.getElementById("conteudo");
  dados.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="detalhes.html?id=${item.id}">
        <img src="${item.imagem}" alt="${item.titulo}">
        <div class="card-content">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
        </div>
      </a>
    `;
    conteudo.appendChild(card);
  });
}

// Função para montar a página de detalhes
function montarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = dados.find(d => d.id == id);

  if (item) {
    const detalhes = document.getElementById("detalhes");
    detalhes.innerHTML = `
      <div class="card">
        <img src="${item.imagem}" alt="${item.titulo}">
        <div class="card-content">
          <h2>${item.titulo}</h2>
          <p><strong>Autor:</strong> ${item.autor}</p>
          <p><strong>Data:</strong> ${item.data}</p>
          <p>${item.conteudo}</p>
        </div>
      </div>
    `;
  }
}
