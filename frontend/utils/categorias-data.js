const categoriasData = [
  {
    id: 1,
    nome: "Lanches",
    icone: "./public/assets/icons/lanches-icon.png",
    destino: "/categorias/lanches",
  },
  {
    id: 2,
    nome: "Doces",
    icone: "./public/assets/icons/doces-icon.png",
    destino: "/categorias/doces",
  },
  {
    id: 3,
    nome: "Carnes",
    icone: "./public/assets/icons/carnes-icon.png",
    destino: "/categorias/carnes",
  },
  {
    id: 4,
    nome: "Saladas",
    icone: "./public/assets/icons/saladas-icon.png",
    destino: "/categorias/saladas",
  },
  {
    id: 5,
    nome: "Sopas",
    icone: "./public/assets/icons/sopas-icon.png",
    destino: "/categorias/sopas",
  },
  {
    id: 6,
    nome: "Massas",
    icone: "./public/assets/icons/massas-icon.png",
    destino: "/categorias/massas",
  },
  {
    id: 7,
    nome: "Oriental",
    icone: "./public/assets/icons/oriental-icon.png",
    destino: "/categorias/oriental",
  },
  {
    id: 8,
    nome: "Bebidas",
    icone: "./public/assets/icons/bebidas-icon.png",
    destino: "/categorias/bebidas",
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
    </div>
    `
  )
  .join("")}
`;
