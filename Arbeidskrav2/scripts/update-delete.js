import Module from "./modules/Module.js";

const outputDiv = document.querySelector( "#div-output" );
const inputArtistId = document.querySelector( "#input-artist-id" );
const inputArtistName = document.querySelector( "#input-artist-name" );
const inputArtistOrigin = document.querySelector( "#input-artist-origin" );
const inputNumberOfAlbums = document.querySelector( "#input-number-of-albums" );
const inputWebsite = document.querySelector( "#input-website" );
const inputImg = document.querySelector( "#input-img" )
const btnUpdateArtist = document.querySelector( "#btn-update-artist" );
const btnDelArtist = document.querySelector( "#btn-del-artist" );
const btnGenerate7Artists = document.querySelector( "#btn-generate-7-artists" );
const btnDelAll = document.querySelector( "#btn-del-all" );

const delArtist = () => {
  // henter inn verdien fra brukeren på ID-feltet
  const artistId = inputArtistId.value;
  // henter ut alle artistene fra localstorage
  const arrArtist = Module.getAllArtists();
  // filtrerer array hentet fra localStorage på alt som IKKE er samme som input og lagrer nye arrayet i en variabel
  const arrWoDelArtist = arrArtist.filter( artist => artist.id != artistId);
  // gjør om arrayet til string
  const arrNewStringed = JSON.stringify(arrWoDelArtist);
  // sletter all info i localStorage
  localStorage.removeItem("Artist Array");
  // sender inn det nye arrayet uten artisten inn i localStorage
  localStorage.setItem("Artist Array", arrNewStringed)
  //kaller på getInfo() for å få oppdatert informasjon i tabellen
  getInfo();
}

const updateArtist = () => {
  // tar alle inputs og legger i verdier
  const artistId = inputArtistId.value;
  const artistName = inputArtistName.value;
  const artistOrigin = inputArtistOrigin.value;
  const numberOfAlbums = inputNumberOfAlbums.value;
  const website = inputWebsite.value;
  const img = inputImg.value;
  const radioGenre = document.querySelector( "input[name='radio-genre']:checked" ).value;
  // gjør om informasjon fra localStorage til objekter i array i variabel
  const arrArtist = JSON.parse(localStorage.getItem("Artist Array"));
  // finner artisten vi ønsker å oppdatere med hjelp av ID'en til artisten
  const artistToUpdate = arrArtist.find(artist => artist.id == artistId);
  // setter feltene i artisten med inputfeltene
  artistToUpdate.name = artistName;
  artistToUpdate.country = artistOrigin;
  artistToUpdate.numberOfAlbums = numberOfAlbums;
  artistToUpdate.website = website;
  artistToUpdate.img = img;
  artistToUpdate.genre = radioGenre;
  //sender inn det oppdaterte arrayet tilbake inn i localStorage (er stringified i selve settingen av item'et)
  localStorage.setItem( "Artist Array", JSON.stringify( arrArtist ) );
  //kaller på getInfo() for å få oppdatert informasjon i tabellen
  getInfo();
}

const getInfo = () => {
  let htmlTxt = "";
  // henter ut all info i localStorage som array
  const arrFromLS = Module.getAllArtists();
  //kjører igjennom alle objektene i arrayet vi hentet of printer de ut som table data inne i hver sin table row - lagret i htmlTxt variabel
  arrFromLS.forEach(artist => {
    htmlTxt += `<tr>
      <td>${artist.id}</td>
      <td>${artist.name}</td>
      <td>${artist.genre}</td>
      <td>${artist.country}</td>
      <td>${artist.numberOfAlbums}</td>
      <td><a href="https://${artist.website}" target="_blank">Link i nytt vindu</a></td>
      <td><a href="${artist.image}" target="_blank">Link i nytt vindu</a></td>
      </tr>
      `;
  });
  // endrer innholdet i DOM der vi setter hovedelementetene til tabellen inn først, og har alle table data plassert inn riktig inne i denne tabellen
  outputDiv.innerHTML = `
  <p>Det er ${arrFromLS.length} artister lagret i localStorage.</p>
  <table class="table table-striped table-responsive">
    <tr>
      <th>ID</th>
      <th>Artist</th>
      <th>Sjanger</th>
      <th>Land</th>
      <th>Antall album</th>
      <th>Nettside</th>
      <th>Bildelink</th>
    </tr>
  ${htmlTxt}
  </table>
  `;
}

const createKeyValueInLS = () => {
  // henter data fra localStorage
  const ls = Module.getAllArtists();
  // Dersom det ikke er noe i localStorage vil du få lagt inn 7 hardkodede artister i localStorage
  if (ls.length == 0 || ls === null){
  const premadeArtists = [
    {
      id: 901,
      name: "Ariana Grande",
      country: "USA",
      numberOfAlbums: "7",
      website: "www.arianagrande.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/250px-Ariana_Grande_Grammys_Red_Carpet_2020.png",
      genre: "Pop"
    },
    {
      id: 902,
      name: "Aerosmith",
      country: "USA",
      numberOfAlbums: "15",
      website: "www.aerosmith.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aerosmith_B.jpg/270px-Aerosmith_B.jpg",
      genre: "Rock"
    },
    {
      id: 903,
      name: "Arctic Monkeys",
      country: "England",
      numberOfAlbums: "7",
      website: "www.arcticmonkeys.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Arcticmonkeyslive.jpg/250px-Arcticmonkeyslive.jpg",
      genre: "Indie"
    },
    {
      id: 904,
      name: "Franz Ferdinand",
      country: "Skotland",
      numberOfAlbums: "5",
      website: "www.franzferdinand.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/FF2009.jpg/250px-FF2009.jpg",
      genre: "Indie"
    },
    {
      id: 905,
      name: "Paramore",
      country: "USA",
      numberOfAlbums: "5",
      website: "www.paramore.net",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Paramore_Hayley_Williams03.jpg/250px-Paramore_Hayley_Williams03.jpg",
      genre: "Rock"
    },
    {
      id: 906,
      name: "ABBA",
      country: "Sverige",
      numberOfAlbums: "22",
      website: "www.abbasite.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ABBA_-_TopPop_1974_5.png/250px-ABBA_-_TopPop_1974_5.png",
      genre: "Pop"
    },
    {
      id: 907,
      name: "Justin Bieber",
      country: "Canada",
      numberOfAlbums: "3",
      website: "www.justinbieber.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/250px-Justin_Bieber_in_2015.jpg",
      genre: "Pop"
    }
  ]
  // stringifier arrayet
  const artistArr = JSON.stringify(premadeArtists);
  // sender inn data i localStorage
  localStorage.setItem("Artist Array", artistArr);
  //kaller på getInfo() for å få oppdatert informasjon i tabellen
  getInfo();
  } else {
  //kaller på getInfo() for å få oppdatert informasjon i tabellen
  getInfo();
  }
}

const delLocalStorage = () => {
  //fjerner all data fra localStorage
  localStorage.removeItem("Artist Array");
  //kaller på getInfo() for å få oppdatert informasjon i tabellen
  getInfo();
}

(
  () => getInfo()
)()

btnDelAll.addEventListener( "click", delLocalStorage )
btnDelArtist.addEventListener( "click", delArtist );
btnUpdateArtist.addEventListener( "click", updateArtist );
btnGenerate7Artists.addEventListener("click", createKeyValueInLS);