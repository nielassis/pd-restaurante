document.addEventListener("DOMContentLoaded", function () {
  const receitasContainer = document.querySelector(".recipes-cards");

  if (!receitasContainer) {
    console.error("Elemento '.recipes-cards' não encontrado no DOM.");
    return;
  }

  console.log("Receitas carregadas:", receitas);

  const urlParams = new URLSearchParams(window.location.search);
  const categoriaSelecionada = urlParams.get("categoria");

  let receitasFiltradas;

  if (categoriaSelecionada) {
    const categoriaNormalizada = categoriaSelecionada.toLowerCase();

    receitasFiltradas = receitas.filter((receita) =>
      categoriasData.some(
        (categoria) =>
          categoria.prop === categoriaNormalizada &&
          receita.categoria.toLowerCase() === categoria.prop
      )
    );

    const categoriaSelecionadaNome = categoriasData.find(
      (categoria) => categoria.prop === categoriaNormalizada
    )?.nome;

    const categoriaSelecionadaIcone = categoriasData.find(
      (categoria) => categoria.prop === categoriaNormalizada
    )?.icone;

    const caminhoIcone = categoriaSelecionadaIcone
      ? `../../${categoriaSelecionadaIcone}`
      : "";

    document.getElementById("page-title").innerHTML += `
      <div class="icon">
        <img src="${caminhoIcone}" alt="${categoriaSelecionadaNome}" />
      </div>
      <h1>${categoriaSelecionadaNome}</h1>
    `;

    console.log("Receitas filtradas:", receitasFiltradas);
  } else {
    receitasFiltradas = receitas;
    console.log("Nenhuma categoria selecionada. Exibindo todas as receitas.");
    document.getElementById("page-title").innerHTML += `
      <h1>Todas as Receitas</h1>
    `;
  }

  if (receitasFiltradas.length > 0) {
    const html = receitasFiltradas
      .map(
        (receita) => `
        <div class="card">
        <div class="card-content">
          <a href="../../pages/receita-index/index.html?id=${receita.id}">
            <img src="${receita.foto}" alt="${receita.nome}">
          <div class="card-header">
            <p>${receita.nome}</p>
            <p class="recipe-description">
              Uma receita fácil e saborosa, pronta em minutos! ${receita.nome} com ingredientes simples e sabor incrível.
            </p>
            </div>
          </a>
        </div>
        </div>
        `
      )
      .join("");

    receitasContainer.innerHTML = `
      <div class="recipes-list">
        ${html}
      </div>
    `;
  } else {
    receitasContainer.innerHTML = `
      <p>Não encontramos receitas para a categoria: <strong>${categoriaSelecionada}</strong></p>
    `;
  }
});
