// Seleção de elementos do menu lateral
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (typeof data !== "undefined") {
  const selectedPost = data.find((post) => post.id === id);

  if (selectedPost) {
    const blogNews = document.getElementById("blog-news");
    blogNews.innerHTML = `
      <div class="blog-news-container">
        <div class="blog-news-card">
          <img src="${selectedPost.image}" alt="${selectedPost.title}">
          <div class="blog-news-content">
            <h2>${selectedPost.title}</h2>
            <p>${selectedPost.content.join("</p><p>")}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    console.error("Post não encontrado.");
  }
} else {
  console.error("Os dados do blog não foram carregados corretamente.");
}
