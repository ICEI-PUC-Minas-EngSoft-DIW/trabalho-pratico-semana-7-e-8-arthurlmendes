// app.js

const DADOS_AVENTURAS = [
    {
        "id": 1,
        "titulo": "Trilha da Pedra do Baú",
        "localizacao": "São Bento do Sapucaí, SP",
        "dificuldade": "Moderada",
        "distancia": "8 km (ida e volta)",
        "tempo_estimado": "4 horas",
        "descricao_breve": "Uma vista panorâmica espetacular espera por você no topo.",
        "conteudo_completo": "A Trilha da Pedra do Baú é uma das mais famosas do estado, oferecendo trechos de escalaminhada com cabos de aço. É uma experiência desafiadora, mas a recompensa no topo, com a vista 360°, vale o esforço. Recomenda-se ir com guia e verificar as condições climáticas antes de iniciar a subida. A trilha é bem sinalizada.",
        "imagem": "https://picsum.photos/id/401/400/250"
    },
    {
        "id": 2,
        "titulo": "Pico da Bandeira",
        "localizacao": "Serra do Caparaó, MG/ES",
        "dificuldade": "Difícil",
        "distancia": "12 km (ida e volta)",
        "tempo_estimado": "6 a 8 horas",
        "descricao_breve": "Conquiste o terceiro ponto mais alto do Brasil e veja o nascer do sol.",
        "conteudo_completo": "O Pico da Bandeira é um desafio de alta altitude (2.892 metros), exigindo preparo físico e equipamentos adequados para o frio. A subida noturna é popular para ver o sol nascer do cume, um espetáculo inesquecível. O Parque Nacional do Caparaó exige registro prévio para a visitação e geralmente a presença de um guia.",
        "imagem": "https://picsum.photos/id/165/400/250"
    },
    {
        "id": 3,
        "titulo": "Camping Vale do Pati",
        "localizacao": "Chapada Diamantina, BA",
        "dificuldade": "Extrema (Trekking)",
        "distancia": "70 km (Trekking completo)",
        "tempo_estimado": "5 dias",
        "descricao_breve": "Experiência imersiva no coração da Chapada Diamantina.",
        "conteudo_completo": "O Vale do Pati não é apenas uma trilha, mas um trekking de múltiplos dias. A área é remota e a hospedagem é feita em casas de nativos (campings rústicos ou quartos). É considerado um dos trekkings mais bonitos do Brasil e exige planejamento logístico rigoroso e contratação de guia local.",
        "imagem": "https://picsum.photos/id/1020/400/250"
    },
    {
        "id": 4,
        "titulo": "Camping da Pousada da Praia",
        "localizacao": "Paraty, RJ",
        "dificuldade": "Fácil",
        "distancia": "1 km da praia",
        "tempo_estimado": "Aberto 24h",
        "descricao_breve": "Camping com infraestrutura completa perto do mar.",
        "conteudo_completo": "Perfeito para quem busca conforto e proximidade com o mar. O camping oferece banheiros limpos, energia elétrica, área de convivência e segurança. Ideal para famílias ou para quem está começando a acampar. Está localizado a poucos minutos do centro histórico de Paraty.",
        "imagem": "https://picsum.photos/id/103/400/250"
    }
];

// --- Funções de Carregamento ---

function carregarItensHome() {
    const containerTrilhas = document.getElementById('trilhas-container');
    if (!containerTrilhas) return; 

    let htmlContent = '';
    
    DADOS_AVENTURAS.forEach(item => {
        // CORRIGIDO: Adicionada a classe de coluna Bootstrap (col-6 col-md-4 col-lg-3)
        htmlContent += `
            <article class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
                    <div class="card-body text-start">
                        <h5 class="card-title text-success fw-bold">${item.titulo}</h5>
                        <p class="card-text">${item.descricao_breve}</p>
                        <a href="detalhes.html?id=${item.id}" class="btn btn-primary mt-auto">Ver Detalhes</a>
                    </div>
                </div>
            </article>
        `;
    });

    containerTrilhas.innerHTML = htmlContent;
}

function carregarDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    const item = DADOS_AVENTURAS.find(a => a.id == itemId);

    const container = document.getElementById('detalhes-item');
    
    if (!item) {
        container.innerHTML = '<h3 class="text-danger">Aventura não encontrada!</h3>';
        document.title = "Erro - Item Não Encontrado";
        return;
    }

    document.title = `${item.titulo} - Detalhes da Aventura`;
    
    // Monta o HTML com os detalhes do item
    container.innerHTML = `
        <h2 class="text-success mb-4 display-5">${item.titulo}</h2>
        
        <div class="row mb-4">
            <div class="col-lg-6 mb-3">
                <img src="${item.imagem}" class="img-fluid rounded shadow" alt="${item.titulo}">
            </div>
            <div class="col-lg-6">
                <p class="lead">${item.descricao_breve}</p>
                
                <hr>

                <p><strong>Localização:</strong> ${item.localizacao}</p>
                <p><strong>Dificuldade:</strong> <span class="badge bg-warning text-dark fs-6">${item.dificuldade}</span></p>
                <p><strong>Distância:</strong> ${item.distancia}</p>
                <p><strong>Tempo Estimado:</strong> ${item.tempo_estimado}</p>
            </div>
        </div>

        <h3 class="text-primary mt-4">Descrição Completa:</h3>
        <p>${item.conteudo_completo}</p>
    `;
}

// --- Lógica de Roteamento Simples ---

// Verifica o título da página para saber qual função chamar
document.addEventListener('DOMContentLoaded', () => {
    if (document.title.includes("Aventure-se na Natureza")) {
        carregarItensHome();
    } else if (document.title.includes("Detalhes da Aventura")) {
        carregarDetalhes();
    }
});