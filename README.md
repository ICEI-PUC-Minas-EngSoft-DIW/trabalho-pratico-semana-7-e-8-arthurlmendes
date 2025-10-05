# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Arthur Lima Mendes
- Matricula: 901170
- Proposta de projeto escolhida: Site interativo sobre inteligência artificial
- Breve descrição sobre seu projeto: O projeto é um site interativo voltado para a introdução à Inteligência Artificial.
O usuário pode aprender conceitos básicos de IA, conhecer as principais áreas de aplicação (como reconhecimento de voz, visão computacional e aprendizado de máquina) e ainda testar seus conhecimentos em um quiz educativo.

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>
![Detalhes](public/homepage7e8.png)
## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>
![Detalhes](public/detalhe.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
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
```
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:
- Matricula:
- Proposta de projeto escolhida:
- Breve descrição sobre seu projeto:

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>

## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Plano de Mobilidade Urbana",
    "descricao": "Novo plano do transporte público.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  }
]
```