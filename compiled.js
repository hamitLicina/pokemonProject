const imgContainer = document.querySelector("#poke-con img");
const pokeName = document.getElementById("name");
const pokeSpecies = document.getElementById("species");
const pokeHeight = document.getElementById("height");
const pokeWeight = document.getElementById("weight");
const abilitiesList = document.getElementById("abilities-list");
const getPokeBtn = document.getElementById("get-poke-button");

//utility functions

function setImgSrcAndAlt(imgNode, imgSrc, imgAlt) {
  imgNode.src = imgSrc;
  imgNode.alt = imgAlt;
}

function setNodeText(domNode, text) {
  domNode.innerText = text;
}

//project-specific function

function setPokeBasics(pokemon) {
  setNodeText(pokeName, `NAME: ${pokemon.name}`);
  setNodeText(pokeSpecies, `SPECIES: ${pokemon.species.name}`);
  setNodeText(pokeHeight, `HEIGHT: ${pokemon.height}`);
  setNodeText(pokeWeight, `WEIGHT: ${pokemon.weight}`);
}

function setPokeAbilities(pokemon) {
  let htmlString = "";
  pokemon.abilities.forEach((item) => {
    htmlString += `<li>${item.ability.name}</li>`;
  });
  abilitiesList.innerHTML = htmlString;
}

function createPokeProfile(pokemon) {
  const imgSrc = pokemon.sprites.other["official-artwork"].front_default;
  setImgSrcAndAlt(imgContainer, imgSrc, pokemon.name);
  setPokeBasics(pokemon);
  setPokeAbilities(pokemon);
}

function getRandomPokemon() {
  const randomPokeId = Math.floor(Math.random() * 1000 + 1);
  console.log(randomPokeId);

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
    .then((res) => res.json())
    .then((json) => {
      const pokemon = json;
      createPokeProfile(pokemon);
    })
    .catch((err) => console.log(err));
}

getPokeBtn.addEventListener("click", function () {
  getRandomPokemon();
});

getRandomPokemon();
