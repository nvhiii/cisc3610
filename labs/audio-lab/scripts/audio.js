const sounds = [
  "../audio/moo.mp3",
  "../audio/fart.mp3",
  "../audio/goat.mp3",
  "../audio/coins.mp3",
  "../audio/clown-car.mp3",
];

const horn = document.querySelector("#horn");

function playRandomAudio() {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[randomIndex]);
  audio.play();
}

horn.addEventListener("click", playRandomAudio);
