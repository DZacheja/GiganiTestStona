const memes = [
  "img/mem1.jpg",
  "img/mem2.jpg",
  "img/mem3.jpg"
];

function loadRandomMeme() {
  const memeImg = document.getElementById("random-meme");
  const randomIndex = Math.floor(Math.random() * memes.length);
  memeImg.src = memes[randomIndex];
}

window.onload = loadRandomMeme;
