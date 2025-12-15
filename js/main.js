const perPage = 10;
let currentPage = 1;

function renderMovies() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const movies = MOVIES.slice(start, start + perPage);

  movies.forEach(m => {
    grid.innerHTML += `
      <a class="card" href="watch.html?id=${m.id}">
        <div class="thumb">
          <img src="${m.thumb}" alt="${m.title}">
          <span class="duration">${m.duration}</span>
        </div>
        <div class="title">${m.title}</div>
      </a>
    `;
  });

  renderPagination();
}

function renderPagination() {
  const totalPage = Math.ceil(MOVIES.length / perPage);
  const pag = document.getElementById("pagination");
  pag.innerHTML = "";

  for (let i = 1; i <= totalPage; i++) {
    pag.innerHTML += `
      <button class="${i === currentPage ? 'active' : ''}"
        onclick="currentPage=${i};renderMovies()">
        ${i}
      </button>
    `;
  }
}

renderMovies();
