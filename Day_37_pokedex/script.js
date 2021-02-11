const poke_container = document.getElementById('pokedex-container');
const pokemon_count = 151;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e630d4',
  normal: '#f5f5f5',
};
const mainTypes = Object.keys(colors);
// console.log(mainTypes);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  createPokemonCard(data);
};
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const id = pokemon.id.toString().padStart(3, 0);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  // console.log(pokemonTypes);
  const type = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
        <div class="poster-img-container">
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
            alt="${pokemon.name}"/>
        </div>
        <div class="pokemon-info">
          <span class="index-number">#${id}</span>
          <h2 class="pokemon-name">${name}</h2>
          <small class="pokemon-type">Type: <span>${type}</span></small>
        </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};
fetchPokemon();
