document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

const card = document.querySelector(".cards");
card.innerHTML = `
    ${data
      .map((data) => {
        return `
        <div class="about-container">
        <div class="about-card">
            <img src="${data.foto}" alt="${data.nome}">
            <div class="card-header">
            <h1>${data.nome}</p>
            <p class="recipe-description">
              ${data.mensagem}
            </p>
             <div class="card-footer">
            <a href="${data.github}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        </div>
        `;
      })
      .join("")} 
  `;
