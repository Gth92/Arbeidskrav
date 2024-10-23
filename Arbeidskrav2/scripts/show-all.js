import Module from "./modules/Module.js";

let showAllBtn = document.querySelector("#show-all-btn");
let outputSection = document.querySelector(".show-all-grid");

const getArtistCards = () => {
  // henter ut alle artistene
  const foundArtists = Module.getAllArtists();
  // manipulerer område i DOM til å printe ut info basert på returen av innsendt array
  outputSection.innerHTML = Module.printArtists(foundArtists);
};

showAllBtn.addEventListener("click", getArtistCards);

