const categoriasData = [
  {
    id: 1,
    nome: "Lanches",
    icone: "./public/assets/icons/lanches-icon.png",
    destino: "./pages/categorias/index.html?categoria=lanches",
    prop: "lanches",
  },
  {
    id: 2,
    nome: "Doces",
    icone: "./public/assets/icons/doces-icon.png",
    destino: "./pages/categorias/index.html?categoria=doces",
    prop: "doces",
  },
  {
    id: 3,
    nome: "Carnes",
    icone: "./public/assets/icons/carnes-icon.png",
    destino: "./pages/categorias/index.html?categoria=carnes",
    prop: "carnes",
  },
  {
    id: 4,
    nome: "Saladas",
    icone: "./public/assets/icons/saladas-icon.png",
    destino: "./pages/categorias/index.html?categoria=saladas",
    prop: "saladas",
  },
  {
    id: 5,
    nome: "Sopas",
    icone: "./public/assets/icons/sopas-icon.png",
    destino: "./pages/categorias/index.html?categoria=sopas",
    prop: "sopas",
  },
  {
    id: 6,
    nome: "Massas",
    icone: "./public/assets/icons/massas-icon.png",
    destino: "./pages/categorias/index.html?categoria=massas",
    prop: "massas",
  },
  {
    id: 7,
    nome: "Oriental",
    icone: "./public/assets/icons/oriental-icon.png",
    destino: "./pages/categorias/index.html?categoria=oriental",
    prop: "oriental",
  },
  {
    id: 8,
    nome: "Bebidas",
    icone: "./public/assets/icons/bebidas-icon.png",
    destino: "./pages/categorias/index.html?categoria=bebidas",
    prop: "bebidas",
  },
];

const categoriasLink = document.querySelector(".categories-cards");

categoriasLink.innerHTML = `
  ${categoriasData
    .map(
      (categoria) => `
        <div class="cards">
          <a href="${categoria.destino}">
            <img src="${categoria.icone}" alt="${categoria.nome}" />
            <p>${categoria.nome}</p>
          </a>
        </div>`
    )
    .join("")}
`;

const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get("categoria");

if (categoria) {
  const receitasContainer = document.querySelector(".recipes-cards");

  receitasContainer.innerHTML = `
    <p>Exibindo receitas da categoria: ${categoria}</p>
  `;
} else {
  document.getElementById("err").innerHTML += `
  <div class="not-found">
    <h1>Receita nao encontrada</h1>
  </div>`;
}
