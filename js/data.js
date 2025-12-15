const MOVIES = [];

for (let i = 1; i <= 20; i++) {
  MOVIES.push({
    id: i,
    title: `Phim Demo ${i}`,
    duration: "07:49",
    thumb: `https://picsum.photos/400/225?random=${i}`,
    servers: [
      {
        name: "Server 1",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        name: "Server 2",
        url: "https://www.w3schools.com/html/movie.mp4"
      }
    ]
  });
}
