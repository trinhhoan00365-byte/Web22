const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));

const movie = MOVIES.find(m => m.id === id);
const video = document.getElementById("video");
const serversDiv = document.getElementById("servers");

if (!movie) {
  alert("Không tìm thấy phim");
  location.href = "index.html";
}

// load server đầu tiên
function loadServer(url) {
  video.pause();
  video.src = url;
  video.load();
  video.play();
}

loadServer(movie.servers[0].url);

movie.servers.forEach((s, index) => {
  const btn = document.createElement("button");
  btn.innerText = s.name;
  if (index === 0) btn.classList.add("active");

  btn.onclick = () => {
    document
      .querySelectorAll(".servers button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    loadServer(s.url);
  };

  serversDiv.appendChild(btn);
});
