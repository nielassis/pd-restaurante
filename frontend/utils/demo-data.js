const demoReceitas = [
  {
    id: "receita-frango-cremoso",
    nome: "Frango Cremoso na Frigideira",
    foto: "./public/assets/recipes/receita1.png",
  },
  {
    id: "receita-nhoque-batata",
    nome: "Nhoque de Batata",
    foto: "./public/assets/recipes/receita2.png",
  },
  {
    id: "receita-mousse-maracuja",
    nome: "Mousse de Maracujá com 3 Ingredientes",
    foto: "./public/assets/recipes/receita3.png",
  },
  {
    id: "receita-torta-limao",
    nome: "Torta de Limão",
    foto: "./public/assets/recipes/receita4.png",
  },
  {
    id: "receita-pao-alho",
    nome: "Pão de Alho com Queijo na Airfryer",
    foto: "./public/assets/recipes/receita5.png",
  },
  {
    id: "receita-strogonoff-carne",
    nome: "Strogonoff de Carne Simples",
    foto: "./public/assets/recipes/receita6.png",
  },
  {
    id: "receita-espaguete-bacon",
    nome: "Espaguete ao Alho e Óleo com Bacon",
    foto: "./public/assets/recipes/receita7.png",
  },
  {
    id: "receita-tacos-carne",
    nome: "Tacos Rápidos de Carne Moída",
    foto: "./public/assets/recipes/receita8.png",
  },
];

const card = document.querySelector(".recipes-cards");
card.innerHTML = `
    ${demoReceitas
      .map((receita) => {
        return `
          <div class="recipe-card">
            <img src="${receita.foto}" alt="${receita.nome}">
            <h2>${receita.nome}</h2>
          </div>
        `;
      })
      .join("")}
  `;
