import Module from "./modules/Module.js";

const inputArtistName = document.querySelector( "#input-artist-name" );
const inputArtistOrigin = document.querySelector( "#input-artist-origin" );
const inputNumberOfAlbums = document.querySelector( "#input-number-of-albums" );
const inputWebsite = document.querySelector( "#input-website" );
const inputImg = document.querySelector( "#input-img" )
const divOutput = document.querySelector( "#div-output" );
const btnStoreArtist = document.querySelector( "#btn-store-artist" );
let arrArtist;
let id;

const storeArtist = () => {

  let htmlTxt = ""
  // lagre verdiene til input fields i en variabel
  const artistName = inputArtistName.value;
  const artistOrigin = inputArtistOrigin.value;
  const numberOfAlbums = inputNumberOfAlbums.value;
  const website = inputWebsite.value;
  const img = inputImg.value;
  const radioGenre = document.querySelector( "input[name='radio-genre']:checked" ).value;

  // Sjekke om alle inputs er fylt inn
  if ( artistName == "" || artistOrigin == "" || numberOfAlbums == "" || website == "" || img == ""){
    htmlTxt = `
    <p class="red-bold-text">Du må fylle inn alle feltene</p>
    `;
  } else {
    // opprett et nytt objekt med verdiene fra input fields
    const newArtist = {id: id, name: artistName, country: artistOrigin, numberOfAlbums: numberOfAlbums, website: website, image: img, genre: radioGenre};
    // sender inn det nylige opprettede objektet inn i arrayet
    arrArtist.push(newArtist);
    // tar tak i arrayet og gjør om ting en string
    const stringedArr = JSON.stringify(arrArtist);
    // plasser arrayet (som string) i local storage med key "Artist Array"
    localStorage.setItem("Artist Array", stringedArr)
    id++;
    // resette verdiene i input fields så det går raskere å legge inn fler artister
    inputArtistName.value = "";
    inputArtistOrigin.value = "";
    inputNumberOfAlbums.value = "";
    inputWebsite.value = "";
    inputImg.value = "";

    htmlTxt = `
    <p class="green-bold-text">${ artistName } ble lagret i local storage.</p>
    `;
  }
  // printer ut en tilbakemelding på om noe ble lagret eller om felter må fylles ut
  divOutput.innerHTML = htmlTxt;
};

// Immediately Invoked Function Expression (IIFE) som sjekker om det finnes obj i localStorage
(
  () => {
    // sørger for at array er det samme som value i key "Artist Array" i localStorage
    arrArtist = JSON.parse(localStorage.getItem("Artist Array") || '[]')
    // setter id til lengden av array og plusser på en. Da vil aldri ID i obj være 0
    id = arrArtist.length + 1;
  }
)();

btnStoreArtist.addEventListener( "click", storeArtist );