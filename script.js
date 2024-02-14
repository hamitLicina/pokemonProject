const mainImg = document.querySelector("#poke-con img");
const pokeName = document.getElementById("name");
const pokeSpecies = document.getElementById("species");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const abilitiesList = document.getElementById("abilities-list");
const getPokeBtn = document.getElementById("get-poke-button");

getPokeBtn.addEventListener("click", function () {

  const randomPokeId = Math.floor(Math.random() * 1000 + 1);

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const pokemon = json;
      const pokeImgSrc = pokemon.sprites.other["official-artwork"].front_default;
      console.log(pokeImgSrc);
      mainImg.src = pokeImgSrc;
      pokeName.innerText = `Name: ${pokemon.name}`;
      pokeSpecies.innerText = `Species: ${pokemon.species.name}`;
      pokeWeight.innerText = `Weight: ${pokemon.weight}`;
      pokeHeight.innerText = `Height: ${pokemon.height}`;
      let htmlString = "";
      pokemon.abilities.forEach((element) => (htmlString += `<li>${element.ability.name}</li>`));
      abilitiesList.innerHTML = htmlString;
    })
    .catch((err) => console.log(err));
})
