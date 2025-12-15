const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));

const movie = MOVIES.find(m => m.id === id);

if (!movie) {
  alert("Không tìm thấy phim");
  location.href = "index.html";
}

const video = document.getElementById("video");
const cover = document.getElementById("video-cover");
const coverImg = document.getElementById("cover-img");
const serversDiv = document.getElementById("servers");

// gán thumbnail
coverImg.src = movie.thumb;

// play video
function playVideo(url) {
  video.src = url;
  cover.style.display = "none";
  video.style.display = "block";
  video.play();
}

// click thumbnail để phát
cover.onclick = () => {
  playVideo(movie.servers[0].url);
};

// server buttons
movie.servers.forEach((s, index) => {
  const btn = document.createElement("button");
  btn.innerText = s.name;
  if (index === 0) btn.classList.add("active");

  btn.onclick = () => {
    document
      .querySelectorAll(".servers button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    playVideo(s.url);
  };

  serversDiv.appendChild(btn);
});
