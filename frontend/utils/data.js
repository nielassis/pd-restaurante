const receitas = [
  {
    id: "receita-frango-cremoso",
    nome: "Frango Cremoso na Frigideira",
    categoria: "Carnes",
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
    categoria: "Massas",
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
    categoria: "Doces",
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
    categoria: "Doces",
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
    categoria: "Massas",
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
    categoria: "Carnes",
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
  {
    id: "receita-carne-assada",
    nome: "Carne Assada com Batatas",
    categoria: "Carnes",
    foto: "../../public/assets/recipes/receita17.png",
    ingredientes: [
      "1 kg de patinho ou alcatra",
      "4 batatas grandes",
      "3 dentes de alho picados",
      "2 colheres de sopa de azeite",
      "Sal e pimenta a gosto",
      "1 cebola em rodelas",
      "1 xícara de água ou caldo de carne",
    ],
    modoPreparo: [
      "Tempere a carne com alho, sal, pimenta e azeite. Deixe marinar por 1 hora.",
      "Pré-aqueça o forno a 180°C.",
      "Em uma assadeira, coloque a carne e as batatas cortadas ao meio.",
      "Adicione a cebola e regue com água ou caldo de carne.",
      "Asse por 1h30, virando a carne na metade do tempo.",
      "Sirva com arroz branco e salada.",
    ],
    videoUrl: "https://www.youtube.com/embed/9Y9Y9Y9Y9Y9",
    tabelaNutricional: {
      calorias: "400 kcal",
      carboidratos: "25g",
      proteinas: "35g",
      gorduras: "15g",
    },
  },
  {
    id: "receita-file-vinho",
    nome: "Filé Mignon ao Molho de Vinho",
    categoria: "Carnes",
    foto: "../../public/assets/recipes/receita18.png",
    ingredientes: [
      "500g de filé mignon em bifes",
      "1 xícara de vinho tinto seco",
      "2 colheres de sopa de manteiga",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 colher de sopa de farinha de trigo",
      "1 xícara de caldo de carne",
      "Sal e pimenta a gosto",
    ],
    modoPreparo: [
      "Tempere os bifes com sal e pimenta.",
      "Em uma frigideira, derreta a manteiga e doure os bifes. Reserve.",
      "Na mesma frigideira, refogue a cebola e o alho.",
      "Adicione a farinha de trigo e misture bem.",
      "Acrescente o vinho e o caldo de carne, mexendo até engrossar.",
      "Volte os bifes à frigideira e cozinhe por 5 minutos.",
      "Sirva com purê de batatas.",
    ],
    videoUrl: "https://www.youtube.com/embed/8X8X8X8X8X8",
    tabelaNutricional: {
      calorias: "450 kcal",
      carboidratos: "10g",
      proteinas: "40g",
      gorduras: "20g",
    },
  },
  {
    id: "receita-frango-parmegiana",
    nome: "Frango à Parmegiana",
    categoria: "Carnes",
    foto: "../../public/assets/recipes/receita19.png",
    ingredientes: [
      "4 filés de frango",
      "1 xícara de farinha de rosca",
      "2 ovos batidos",
      "1 xícara de molho de tomate",
      "200g de queijo muçarela",
      "Óleo para fritar",
      "Sal e pimenta a gosto",
    ],
    modoPreparo: [
      "Tempere os filés com sal e pimenta.",
      "Passe os filés na farinha de rosca, nos ovos batidos e novamente na farinha.",
      "Frite em óleo quente até dourar.",
      "Coloque os filés em uma assadeira, cubra com molho de tomate e queijo muçarela.",
      "Leve ao forno até derreter o queijo.",
      "Sirva com arroz e batata frita.",
    ],
    videoUrl: "https://www.youtube.com/embed/7X7X7X7X7X7",
    tabelaNutricional: {
      calorias: "500 kcal",
      carboidratos: "30g",
      proteinas: "35g",
      gorduras: "25g",
    },
  },
  {
    id: "receita-temaki",
    nome: "Temaki de Salmão",
    categoria: "Oriental",
    foto: "../../public/assets/recipes/receita16.png",
    ingredientes: [
      "1 xícara de arroz para sushi",
      "100g de salmão fresco",
      "1 folha de nori",
      "1 colher de sopa de cream cheese",
      "Molho shoyu para servir",
    ],
    modoPreparo: [
      "Prepare o arroz para sushi conforme as instruções da embalagem.",
      "Corte o salmão em tiras finas.",
      "Corte a folha de nori ao meio e espalhe o arroz sobre uma metade.",
      "Adicione o salmão e o cream cheese no centro.",
      "Enrole o temaki no formato de cone.",
      "Sirva com molho shoyu.",
    ],
    videoUrl: "https://www.youtube.com/embed/3X3X3X3X3X3",
    tabelaNutricional: {
      calorias: "200 kcal",
      carboidratos: "30g",
      proteinas: "10g",
      gorduras: "5g",
    },
  },
  {
    id: "receita-lasanha-berinjela",
    nome: "Lasanha de Berinjela",
    categoria: "Massas",
    foto: "../../public/assets/recipes/receita15.png",
    ingredientes: [
      "2 berinjelas cortadas em fatias",
      "300g de queijo muçarela",
      "500g de molho de tomate",
      "100g de queijo parmesão ralado",
      "Azeite para untar",
    ],
    modoPreparo: [
      "Pré-aqueça o forno a 180°C.",
      "Grelhe as fatias de berinjela em uma frigideira com um fio de azeite.",
      "Em uma forma untada, monte camadas de berinjela, molho de tomate e queijo muçarela.",
      "Finalize com queijo parmesão ralado.",
      "Asse por 30 minutos ou até dourar.",
      "Sirva quente.",
    ],
    videoUrl: "https://www.youtube.com/embed/4X4X4X4X4X4",
    tabelaNutricional: {
      calorias: "280 kcal",
      carboidratos: "20g",
      proteinas: "15g",
      gorduras: "12g",
    },
  },
  {
    id: "receita-hamburguer",
    nome: "Hambúrguer Artesanal",
    categoria: "Lanches",
    foto: "../../public/assets/recipes/receita14.png",
    ingredientes: [
      "500g de carne moída",
      "1 ovo",
      "1 cebola picada",
      "2 dentes de alho picados",
      "Sal e pimenta a gosto",
      "Pão de hambúrguer",
      "Queijo cheddar",
      "Alface, tomate e maionese para montar",
    ],
    modoPreparo: [
      "Misture a carne moída, o ovo, a cebola, o alho, o sal e a pimenta.",
      "Modele os hambúrgueres e grelhe em uma frigideira ou churrasqueira.",
      "Monte o hambúrguer com o pão, queijo, alface, tomate e maionese.",
      "Sirva com batata frita ou salada.",
    ],
    videoUrl: "https://www.youtube.com/embed/5X5X5X5X5X5",
    tabelaNutricional: {
      calorias: "450 kcal",
      carboidratos: "30g",
      proteinas: "25g",
      gorduras: "20g",
    },
  },
  {
    id: "receita-suco-detox",
    nome: "Suco Detox de Abacaxi com Hortelã",
    categoria: "Bebidas",
    foto: "../../public/assets/recipes/receita13.png",
    ingredientes: [
      "2 fatias de abacaxi",
      "1 folha de couve",
      "200ml de água gelada",
      "Folhas de hortelã a gosto",
      "Gelo a gosto",
    ],
    modoPreparo: [
      "Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
      "Coe (se necessário) e sirva gelado.",
    ],
    videoUrl: "https://www.youtube.com/embed/6X6X6X6X6X6",
    tabelaNutricional: {
      calorias: "80 kcal",
      carboidratos: "20g",
      proteinas: "1g",
      gorduras: "0g",
    },
  },
  {
    id: "receita-brigadeiro",
    nome: "Brigadeiro Tradicional",
    categoria: "Doces",
    foto: "../../public/assets/recipes/receita12.png",
    ingredientes: [
      "1 lata de leite condensado",
      "2 colheres de sopa de chocolate em pó",
      "1 colher de sopa de manteiga",
      "Chocolate granulado para decorar",
    ],
    modoPreparo: [
      "Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.",
      "Leve ao fogo baixo, mexendo sem parar, até desgrudar do fundo da panela.",
      "Deixe esfriar e faça pequenas bolinhas com as mãos untadas.",
      "Passe as bolinhas no chocolate granulado e sirva em forminhas de papel.",
    ],
    videoUrl: "https://www.youtube.com/embed/7X7X7X7X7X7",
    tabelaNutricional: {
      calorias: "90 kcal",
      carboidratos: "12g",
      proteinas: "2g",
      gorduras: "4g",
    },
  },
  {
    id: "receita-yakissoba",
    nome: "Yakissoba de Frango",
    categoria: "Oriental",
    foto: "../../public/assets/recipes/receita11.png",
    ingredientes: [
      "300g de macarrão para yakissoba",
      "200g de peito de frango em tiras",
      "1 cenoura cortada em palitos",
      "1 pimentão cortado em tiras",
      "1 cebola cortada em rodelas",
      "3 colheres de sopa de molho shoyu",
      "2 colheres de sopa de óleo de gergelim",
      "Sal e pimenta a gosto",
    ],
    modoPreparo: [
      "Cozinhe o macarrão conforme as instruções da embalagem e reserve.",
      "Em uma frigideira grande, aqueça o óleo e refogue o frango até dourar.",
      "Adicione os legumes e refogue até ficarem macios.",
      "Junte o macarrão cozido e o molho shoyu, misturando bem.",
      "Tempere com sal e pimenta e sirva quente.",
    ],
    videoUrl: "https://www.youtube.com/embed/8X8Z8Z8Z8Z8",
    tabelaNutricional: {
      calorias: "320 kcal",
      carboidratos: "45g",
      proteinas: "20g",
      gorduras: "8g",
    },
  },
  {
    id: "receita-sopa-abobora",
    nome: "Sopa Cremosa de Abóbora",
    categoria: "Sopas",
    foto: "../../public/assets/recipes/receita10.png",
    ingredientes: [
      "500g de abóbora cabotiá",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 litro de água ou caldo de legumes",
      "200ml de creme de leite",
      "Sal e pimenta a gosto",
      "Azeite para refogar",
    ],
    modoPreparo: [
      "Descasque e corte a abóbora em cubos.",
      "Em uma panela, refogue a cebola e o alho no azeite até dourarem.",
      "Adicione a abóbora e o caldo de legumes. Cozinhe até que a abóbora fique macia.",
      "Bata a mistura no liquidificador até obter um creme liso.",
      "Volte à panela, adicione o creme de leite e tempere com sal e pimenta.",
      "Sirva quente, decorada com salsinha ou croutons.",
    ],
    videoUrl: "https://www.youtube.com/embed/9X9Zz5Z5Z5Z",
    tabelaNutricional: {
      calorias: "180 kcal",
      carboidratos: "20g",
      proteinas: "4g",
      gorduras: "10g",
    },
  },
  {
    id: "receita-salada-caesar",
    nome: "Salada Caesar Clássica",
    categoria: "Saladas",
    foto: "../../public/assets/recipes/receita9.png",
    ingredientes: [
      "1 alface romana",
      "100g de croutons",
      "50g de queijo parmesão ralado",
      "1 peito de frango grelhado",
      "Molho Caesar a gosto",
    ],
    modoPreparo: [
      "Lave e rasgue as folhas de alface romana.",
      "Grelhe o peito de frango e corte em tiras.",
      "Em uma tigela grande, misture o alface, os croutons e o frango grelhado.",
      "Regue com o molho Caesar e finalize com queijo parmesão ralado.",
      "Sirva imediatamente.",
    ],
    videoUrl: "https://www.youtube.com/embed/5rZ7zzGj5n4",
    tabelaNutricional: {
      calorias: "220 kcal",
      carboidratos: "15g",
      proteinas: "18g",
      gorduras: "10g",
    },
  },
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const receita = receitas.find((r) => r.id === id);

if (receita) {
  document.title = `Tempero Certo | Receita: ${receita.nome}`;
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
