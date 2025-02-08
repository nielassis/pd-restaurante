const data = [
  {
    id: "noticia-1",
    title: "Como o strogonoff chegou ao Brasil?",
    description:
      "Veja como a receita russa ganhou espaço nas cozinhas brasileiras",
    content: [
      "No Brasil, o prato era extremamente popular nas décadas de 1960 e 1970. Nessa época, era chique preparar jantares e receber convidados com estrogonofe. Por aqui, o creme azedo, pouco popular, foi substituído por outro laticínio bem mais acessível: o creme de leite.",
      "Naquela época, era comum servir estrogonofe com arroz e batata sauté. A batata palha de saquinho surgiu nos anos 1980 e, graças a uma inteligente campanha de divulgação da sua fabricante, a Crac, enraizamos o costume de comê-la com diversos pratos: cachorro-quente, fricassé, salpicão - e estrogonofe. A praticidade falou mais alto",
      "Hoje, o prato é onipresente em restaurantes, cardápios de PF, praças de alimentação – convenhamos, é tão versátil que serve até para jantares românticos. Pelo mundo, há versões com macarrão (Reino Unido e Austrália) e até com salsicha e conservas (países nórdicos, como Finlândia e Suécia). Você comeria?",
    ],
    image: "../../public/assets/blog/noticia1.png",
  },
];

const card = document.querySelector(".blog-cards");
card.innerHTML = `
    ${data
      .map((data) => {
        return `
          <div class="blog-card">
          <a href="../blog/template.html?id=${data.id}">
            <img src="${data.image}" alt="${data.title}">
            <h2>${data.title}</h2>
            <span>${data.description}</span>
          </a>
          </div>
        `;
      })
      .join("")}
  `;
