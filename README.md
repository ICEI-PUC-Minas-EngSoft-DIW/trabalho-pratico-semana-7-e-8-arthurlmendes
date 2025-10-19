# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Arthur Lima Mendes
- Matricula: 901170
- Proposta de projeto escolhida: Lugares e Experiências
- Breve descrição sobre seu projeto: O projeto consiste em um Guia Digital de Trilhas e Acampamentos, alinhado com a proposta "Lugares e Experiências".

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>
![Print da Homepage](imagens/r5.jpeg)


## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>
![Detalhes](imagens/r1.jpeg)
![Detalhes](imagens/r2.png)
![Detalhes](imagens/r3.png)
![Detalhes](imagens/r4.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const DADOS_AVENTURAS = [
    {
        "id": 1,
        "titulo": "Trilha da Pedra do Baú",
        "descricao": "Uma vista panorâmica espetacular espera por você no topo.",
        "conteudo": "A Trilha da Pedra do Baú é uma das mais famosas do estado, oferecendo trechos de escalaminhada com cabos de aço. Recomenda-se ir com guia e verificar as condições climáticas antes de iniciar a subida.",
        "categoria": "Trilha",
        "localizacao": "São Bento do Sapucaí, SP",
        "dificuldade": "Moderada",
        "imagem": "https://picsum.photos/id/401/400/250"
    },
    {
        "id": 2,
        "titulo": "Pico da Bandeira",
        "descricao": "Conquiste o terceiro ponto mais alto do Brasil ao nascer do sol.",
        "conteudo": "O Pico da Bandeira é um desafio de alta altitude (2.892 metros), exigindo preparo físico e equipamentos adequados. A subida noturna é popular para ver o sol nascer do cume, um espetáculo inesquecível.",
        "categoria": "Trilha",
        "localizacao": "Serra do Caparaó, MG/ES",
        "dificuldade": "Difícil",
        "imagem": "https://picsum.photos/id/165/400/250"
    },
    {
        "id": 3,
        "titulo": "Camping Vale do Pati",
        "descricao": "Experiência imersiva no coração da Chapada Diamantina.",
        "conteudo": "O Vale do Pati exige um trekking de múltiplos dias. A área é remota e a hospedagem é feita em casas de nativos (campings rústicos). É considerado um dos trekkings mais bonitos do Brasil.",
        "categoria": "Acampamento",
        "localizacao": "Chapada Diamantina, BA",
        "dificuldade": "Extrema (Trekking)",
        "imagem": "https://picsum.photos/id/1020/400/250"
    },
    {
        "id": 4,
        "titulo": "Camping da Pousada da Praia",
        "descricao": "Camping com infraestrutura completa perto do mar.",
        "conteudo": "Perfeito para quem busca conforto e proximidade com o mar. O camping oferece banheiros limpos, energia elétrica, área de convivência e segurança.",
        "categoria": "Acampamento",
        "localizacao": "Paraty, RJ",
        "dificuldade": "Fácil",
        "imagem": "https://picsum.photos/id/103/400/250"
    }
];
```
