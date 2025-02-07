const receitas = [
  {
    id: "receita-frango-cremoso",
    nome: "Frango Cremoso na Frigideira",
    foto: "../../public/assets/recipes/receita1.png",
    ingredientes: [
      "500g de peito de frango cortado em cubos",
      "2 colheres de sopa de azeite",
      "Sal e pimenta-do-reino a gosto",
      "3 dentes de alho picados",
      "1 cebola picada",
      "1 lata de milho-verde (sem a água)",
      "1 copo de requeijão cremoso",
      "Folhas de manjericão fresco a gosto",
      "100g de azeitonas pretas sem caroço",
      "3 tomates maduros picados",
    ],
    modoPreparo: [
      "Em uma frigideira grande, aqueça o azeite em fogo médio.",
      "Adicione os cubos de frango e tempere com sal e pimenta-do-reino. Cozinhe até que estejam dourados por todos os lados.",
      "Acrescente o alho e a cebola picados, refogando até que fiquem macios.",
      "Junte o milho-verde, as azeitonas e os tomates picados. Misture bem e deixe cozinhar por alguns minutos, permitindo que os tomates liberem seu suco.",
      "Reduza o fogo, adicione o requeijão cremoso e misture até obter um molho homogêneo.",
      "Finalize com as folhas de manjericão fresco.",
      "Sirva quente, acompanhado de arroz branco ou uma salada verde.",
    ],
    videoUrl: "https://www.youtube.com/embed/V99vKIaA6b0",
    tabelaNutricional: {
      calorias: "320 kcal",
      carboidratos: "12g",
      proteinas: "25g",
      gorduras: "18g",
    },
  },
  {
    id: "receita-nhoque-batata",
    nome: "Nhoque de Batata",
    foto: "../../public/assets/recipes/receita2.png",
    ingredientes: [
      "1 kg de batatas",
      "1 ovo",
      "2 xícaras de farinha de trigo",
      "Sal a gosto",
      "Molho de tomate para servir",
    ],
    modoPreparo: [
      "Cozinhe as batatas com casca até ficarem macias. Descasque e amasse-as ainda quentes.",
      "Deixe esfriar um pouco, adicione o ovo e o sal, misturando bem.",
      "Acrescente a farinha aos poucos, até obter uma massa homogênea que desgrude das mãos.",
      "Em uma superfície enfarinhada, faça rolinhos com a massa e corte-os em pedaços de aproximadamente 2 cm.",
      "Cozinhe os nhoques em água fervente com sal. Quando eles subirem à superfície, retire-os com uma escumadeira.",
      "Sirva com o molho de tomate de sua preferência.",
    ],
    videoUrl: "https://www.youtube.com/embed/SQUKsY-pME4",
    tabelaNutricional: {
      calorias: "250 kcal",
      carboidratos: "50g",
      proteinas: "6g",
      gorduras: "2g",
    },
  },
  {
    id: "receita-mousse-maracuja",
    nome: "Mousse de Maracujá com 3 Ingredientes",
    foto: "../../public/assets/recipes/receita3.png",
    ingredientes: [
      "1 lata de leite condensado",
      "1 lata de creme de leite",
      "1 xícara de suco de maracujá concentrado",
    ],
    modoPreparo: [
      "No liquidificador, bata o leite condensado, o creme de leite e o suco de maracujá até obter uma mistura homogênea.",
      "Despeje a mistura em taças ou em um recipiente único.",
      "Leve à geladeira por pelo menos 2 horas antes de servir.",
      "Se desejar, decore com sementes de maracujá ou raspas de chocolate.",
    ],
    videoUrl: "https://www.youtube.com/embed/tKCvDIXp6FI",
    tabelaNutricional: {
      calorias: "280 kcal",
      carboidratos: "40g",
      proteinas: "5g",
      gorduras: "10g",
    },
  },
  {
    id: "receita-torta-limao",
    nome: "Torta de Limão",
    foto: "../../public/assets/recipes/receita4.png",
    ingredientes: [
      "1 pacote de biscoito maisena",
      "100g de manteiga derretida",
      "1 lata de leite condensado",
      "1/2 xícara de suco de limão",
      "1 lata de creme de leite",
      "Raspas de limão para decorar",
    ],
    modoPreparo: [
      "Triture os biscoitos no liquidificador ou processador até virar uma farinha.",
      "Misture a farinha de biscoito com a manteiga derretida até formar uma massa homogênea.",
      "Forre o fundo e as laterais de uma forma de fundo removível com essa massa, pressionando bem.",
      "Leve ao forno pré-aquecido a 180°C por cerca de 10 minutos. Reserve.",
      "No liquidificador, bata o leite condensado, o creme de leite e o suco de limão até obter um creme consistente.",
      "Despeje o creme sobre a massa já fria e leve à geladeira por pelo menos 4 horas.",
      "Decore com raspas de limão antes de servir.",
    ],
    videoUrl: "https://www.youtube.com/embed/cc8QuY7seFQ",
    tabelaNutricional: {
      calorias: "340 kcal",
      carboidratos: "50g",
      proteinas: "6g",
      gorduras: "12g",
    },
  },
  {
    id: "receita-pao-alho",
    nome: "Pão de Alho com Queijo na Airfryer",
    foto: "../../public/assets/recipes/receita5.png",
    ingredientes: [
      "4 pães franceses",
      "100g de manteiga em temperatura ambiente",
      "3 dentes de alho picados",
      "200g de queijo muçarela",
    ],
    modoPreparo: [
      "Misture a manteiga com o alho até formar uma pasta.",
      "Corte os pães em fatias, sem separá-las completamente.",
      "Passe a pasta de alho entre as fatias e sobre o pão.",
      "Polvilhe o queijo muçarela sobre os pães.",
      "Preaqueça a Airfryer a 180°C.",
      "Coloque os pães na Airfryer e asse por cerca de 5 a 7 minutos, ou até ficarem dourados e crocantes.",
      "Sirva quente e aproveite!",
    ],
    videoUrl: "https://www.youtube.com/embed/y5EL4qPM2U8",
    tabelaNutricional: {
      calorias: "290 kcal",
      carboidratos: "30g",
      proteinas: "10g",
      gorduras: "15g",
    },
  },
  {
    id: "receita-strogonoff-carne",
    nome: "Strogonoff de Carne Simples",
    categoria: "Prato Principal",
    foto: "../../public/assets/recipes/receita6.png",
    ingredientes: [
      "500g de carne bovina em tiras",
      "1 cebola picada",
      "2 colheres de sopa de ketchup",
      "1 colher de sopa de mostarda",
      "1 lata de creme de leite",
      "Sal e pimenta-do-reino a gosto",
      "1 colher de sopa de óleo ou azeite",
    ],
    modoPreparo: [
      "Em uma panela, aqueça o óleo ou azeite e refogue a cebola até ficar macia.",
      "Adicione a carne em tiras e frite até que fique dourada.",
      "Acrescente o ketchup, a mostarda e misture bem.",
      "Adicione o creme de leite, ajustando o sal e a pimenta, e deixe cozinhar por 5 minutos.",
      "Sirva com arroz branco e batata palha.",
    ],
    videoUrl: "https://www.youtube.com/embed/7QU3fp09PEw",
    tabelaNutricional: {
      calorias: "350 kcal",
      carboidratos: "10g",
      proteinas: "30g",
      gorduras: "20g",
    },
  },
  {
    id: "receita-espaguete-bacon",
    nome: "Espaguete ao Alho e Óleo com Bacon",
    categoria: "Massas",
    foto: "../../public/assets/recipes/receita7.png",
    ingredientes: [
      "200g de espaguete",
      "150g de bacon picado",
      "3 dentes de alho picados",
      "2 colheres de sopa de azeite",
      "Sal e pimenta-do-reino a gosto",
      "Queijo parmesão ralado a gosto",
    ],
    modoPreparo: [
      "Cozinhe o espaguete em água salgada até ficar al dente.",
      "Enquanto isso, frite o bacon em uma frigideira até ficar crocante.",
      "Adicione o alho picado à frigideira e frite até dourar.",
      "Misture o espaguete cozido com a mistura de bacon e alho.",
      "Tempere com sal e pimenta a gosto e finalize com queijo parmesão.",
    ],
    videoUrl: "https://www.youtube.com/embed/H5pRE2Gonuc",
    tabelaNutricional: {
      calorias: "420 kcal",
      carboidratos: "60g",
      proteinas: "12g",
      gorduras: "18g",
    },
  },
  {
    id: "receita-tacos-carne",
    nome: "Tacos Rápidos de Carne Moída",
    categoria: "Lanches",
    foto: "../../public/assets/recipes/receita8.png",
    ingredientes: [
      "300g de carne moída",
      "1 cebola picada",
      "1 tomate picado",
      "4 tortilhas de milho",
      "Temperos a gosto (páprica, cominho, pimenta)",
      "Queijo ralado para finalizar",
      "Alface e sour cream (opcional)",
    ],
    modoPreparo: [
      "Em uma panela, refogue a carne moída com a cebola até dourar.",
      "Adicione o tomate picado e os temperos e cozinhe por 5 minutos.",
      "Aqueça as tortilhas em uma frigideira.",
      "Recheie as tortilhas com a carne temperada, adicione queijo e, se desejar, alface e sour cream.",
      "Sirva imediatamente.",
    ],
    videoUrl: "https://www.youtube.com/embed/rhQhMfwSVWg",
    tabelaNutricional: {
      calorias: "290 kcal",
      carboidratos: "35g",
      proteinas: "20g",
      gorduras: "10g",
    },
  },
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const receita = receitas.find((r) => r.id === id);

if (receita) {
  document.title = `Receita: ${receita.nome}`;
  document.getElementById("recipe-name").textContent = receita.nome;

  document.getElementById("recipe").innerHTML += `
   <div class="recipe-container">
    <div class="recipe-image">
      <img src="${receita.foto}" alt="${receita.nome}" />
    </div>

    <div class="nutrition-table">
      <h2>Tabela nutricional</h2>
      <table>
        <tr><td>Calorias</td><td class="info">${
          receita.tabelaNutricional.calorias
        }</td></tr>
        <tr><td>Gorduras</td><td class="info">${
          receita.tabelaNutricional.gorduras
        }</td></tr>
        <tr><td>Proteínas</td><td class="info">${
          receita.tabelaNutricional.proteinas
        }</td></tr>
        <tr><td>Carboidratos</td><td class="info">${
          receita.tabelaNutricional.carboidratos
        }</td></tr>
      </table>
    </div>
   </div>

    <p class="recipe-description">
      Uma receita fácil e saborosa, pronta em minutos! ${
        receita.nome
      } com ingredientes simples e sabor incrível.
    </p>

    <div class="recipe-ingredients">
      <h2 class="recipe-ingredients-title">Ingredientes</h2>
      <ul> 
        ${receita.ingredientes
          .map(
            (ingrediente) =>
              ` <li><div class="check"><input type="checkbox" id="check"></div><div class="ingredient">${ingrediente}</div></li>`
          )
          .join("")}
      </ul>
    </div>

    <div class="recipe-preparation">
      <h2 class="recipe-preparation-title recipe-ingredients-title">Modo de Preparo</h2>
      <div class="preparation-list">
      <ol>
        ${receita.modoPreparo.map((passo) => `<li>${passo}</li>`).join("")}
      </ol>
      </div>
    </div>

    <div class="recipe-video">
      <iframe
        width="720"
        height="480"
        src="${receita.videoUrl}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  `;
} else {
  document.getElementById("recipe").innerHTML += `
  <div class="not-found">
    <h1>Receita nao encontrada</h1>
  </div>`;
}
