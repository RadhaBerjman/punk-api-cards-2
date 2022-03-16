const beers = document.querySelector('#beers');

fetch('https://api.punkapi.com/v2/beers')
  .then((response) => response.json())
  .then((data) => {
    const html = data.map((beer) => {
      return `<div class="card">
  <h2>${beer.name}</h2>
  <img
    src="${beer.image_url}"
    alt="beer"
    height="180"
  />
  <p class="card__description">
  ${beer.description}
  </p>
</div>`;
    }).join("");
    beers.innerHTML = html
  });

 //Creando Cards : Utilizando el témplate de `ejercicio Punk Api Cards`, cuando se abre la página se debe 
 //renderizar un listado de cards.
