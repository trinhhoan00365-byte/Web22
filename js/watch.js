const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const movie = MOVIES.find(m => m.id === id);
const video = document.getElementById("video");
const serversDiv = document.getElementById("servers");

if (!movie) {
  alert("Phim không tồn tại");
  location.href = "index.html";
}

video.src = movie.servers[0].url;

movie.servers.forEach((s, index) => {
  const btn = document.createElement("button");
  btn.innerText = s.name;
  if (index === 0) btn.classList.add("active");

  btn.onclick = () => {
    document.querySelectorAll(".servers button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    video.src = s.url;
    video.play();
  };

  serversDiv.appendChild(btn);
});
