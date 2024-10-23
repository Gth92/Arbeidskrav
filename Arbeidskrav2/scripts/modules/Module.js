const Module = (
    () => {

      // tilgjengeliggjør variabel utenfor alle funksjonene
      let htmlTxt = "";

      const getAllArtists = () => {
        // deklarerer variabel med tomt array
        const emptyArr = [];
        // lagrer info fra localStorage i en variabel
        const allArtists = JSON.parse(localStorage.getItem("Artist Array"));

        if (allArtists === null){
          // dersom arrayet er tomt vil variabelen med tomt array returneres
          return emptyArr;
        } else {
          // dersom arrayet ikke er tomt vil det returnere informasjon i localStorage
          return allArtists; 
        }
      }

      const fillFields = () => {
        // returnerer rød tilbakemelding med at felt må fylles ut
        htmlTxt = `<p class="red-bold-text">Du må fylle inn i feltet</p>`;
        return htmlTxt;
      }

      const noMatches = () => {
        // returnerer rød tilbakemelding på at det ikke finnes noen matcher
        htmlTxt = `<p class="red-bold-text">Fant ingen matches</p>`;
        return htmlTxt;
      }

      // tar inn foundArtists (array) som parameter
      const printArtists = foundArtists =>{
        // kjører igjennom alle arrayenes objekter, og setter et css card på hver artist
        foundArtists.forEach(artist => { 
            htmlTxt += `
            <div class="card">
              <img class="card-img-top" src="${artist.image}" />
              <div class="body">
                <h3 class="card-title">Artist: ${artist.name}</h3>
                <p class="card-text">Land: ${artist.country}</p>
                <p class="card-text">Antall album: ${artist.numberOfAlbums}</p>
                <p class="card-text">Nettside: <a href="https://${artist.website}" target="_blank">${artist.website}</a></p>
              </div>
            </div>
          `;
        });
        // sender tilbake alle cards
      return htmlTxt;
      }

      const printArtistsBootstrap = foundArtists =>{
        // kjører igjennom alle arrayenes objekter, og setter et css card på hver artist
        foundArtists.forEach(artist => { 
            htmlTxt += `
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card">
                <img class="card-img-top" src="${artist.image}" />
                <div class="body">
                  <h3 class="card-title">Artist: ${artist.name}</h3>
                  <p class="card-text">Land: ${artist.country}</p>
                  <p class="card-text">Antall album: ${artist.numberOfAlbums}</p>
                  <p class="card-text">Nettside: <a href="https://${artist.website}" target="_blank">${artist.website}</a></p>
                </div>
              </div>
            </div>
          `;
        });
        // sender tilbake alle cards
      return htmlTxt;
      }

      // tar inn input og array som parametre
      const searchCheck = (input, foundArtists) => {
        // resetter string/htmlTxt til å være tom
        htmlTxt = "";
        //kjører funksjonen fillFields dersom input er tom
        if (input == ""){
          // setter returen fra fillFields som htmlTxt
            htmlTxt = Module.fillFields();
            // dersom foundArtists sin lengde er 0 finnes det ingen matches
          } else if (foundArtists.length == 0){
            // setter returen fra noMatches som htmlTxt
            htmlTxt = Module.noMatches();
          } else {
            // alt utenom det vil kjøre funksjonen printArtists og sette htmlTxt som returen av funksjonen
            htmlTxt = Module.printArtistsBootstrap(foundArtists);
          }
        return htmlTxt;
      }
    
      return {
        getAllArtists, printArtists, fillFields, noMatches, searchCheck, printArtistsBootstrap
      }
    }
)();
  export default Module;