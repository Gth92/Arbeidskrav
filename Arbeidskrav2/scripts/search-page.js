import Module from "./modules/Module.js";

const inputArtistName = document.querySelector( "#input-artist-name" );
const inputArtistOrigin = document.querySelector( "#input-artist-origin" );
const btnArtistName = document.querySelector( "#btn-artist-name" );
const btnArtistOrigin = document.querySelector( "#btn-artist-origin" );
const btnGenre = document.querySelector( "#btn-genre" )
const divOutput = document.querySelector( "#div-output" );

const allArtists = Module.getAllArtists();
let htmlTxt = "";

const searchArtistName = () => {
  htmlTxt = "";
  // tar inn brukerens input og lagrer all info som lowercase
  const input = inputArtistName.value.toLowerCase();
  // finner artist i arrayet hentet ut fra localStorage filtrert på å være likt som input fra bruker - begge som lower case
  const foundArtists = allArtists.filter( artist => artist.name.toLowerCase() == input );
  // kjører en sjekk i modul og får tilbake en string (htmlTxt) basert på sjekken
  htmlTxt = Module.searchCheck(input, foundArtists);
  // manipulerer en div i DOM ut ifra htmlTxt fra sjekken
  divOutput.innerHTML = htmlTxt;
}

const searchArtistOrigin = () => {
  htmlTxt = "";
  // tar inn brukerens input og lagrer all info som lowercase
  const input = inputArtistOrigin.value.toLowerCase();
    // finner artist i arrayet hentet ut fra localStorage filtrert på å være likt som input fra bruker - begge som lower case
  const foundArtists = allArtists.filter( artist => artist.country.toLowerCase() == input);
  // kjører en sjekk i modul og får tilbake en string (htmlTxt) basert på sjekken
  htmlTxt = Module.searchCheck(input, foundArtists);
  // manipulerer en div i DOM ut ifra htmlTxt fra sjekken
  divOutput.innerHTML = htmlTxt;
}

const searchGenre = () => {
  htmlTxt = ""; 
  const input = document.querySelector( "input[name='radio-genre']:checked" ).value;
  // tar inn brukerens input fra radiobutton value
  const foundArtists = allArtists.filter( artist => artist.genre == input );
  // sjekker artist i arrayet hentet ut fra localStorage basert på om input'en fra bruker er lik noe i arrayet
  htmlTxt = Module.searchCheck(input, foundArtists);
  // manipulerer en div i DOM ut ifra htmlTxt fra sjekken
  divOutput.innerHTML = htmlTxt;
}

btnGenre.addEventListener("click", searchGenre);
btnArtistName.addEventListener("click", searchArtistName);
btnArtistOrigin.addEventListener("click", searchArtistOrigin);