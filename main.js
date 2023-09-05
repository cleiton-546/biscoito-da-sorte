const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const open = document.getElementById("open")
const openAnother = document.getElementById("openAnother");
const frasesDaSorte = [
  "A sorte favorece a mente preparada.",
  "Acredite em si mesmo e tudo será possível.",
  "A vida trará coisas boas se tiveres paciência.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "A vida trará coisas boas se tiver paciência",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo",
];


function gerarFraseDaSorte() {
  const indice = Math.floor(Math.random() * frasesDaSorte.length);
  return frasesDaSorte[indice];
}



openAnother.addEventListener("click", function () {
  const luckyPhrase = document.querySelector(".luckyPhrase");
  const novaFraseDaSorte = gerarFraseDaSorte();
  luckyPhrase.innerHTML = `<p>${novaFraseDaSorte}</p>`;

  screen2.classList.add("hide");
  screen1.classList.remove("hide");
});

open.addEventListener("click", function () {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
});

document.addEventListener("keydown" ,function(e){
  if(e.key == "Enter" &&
  screen1.classList.contains("hide")) {
    handleResetClick();
  }
})

