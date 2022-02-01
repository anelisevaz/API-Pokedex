const fetchPokemon = () => {
  const getPokemonUrl = id => 'https://pokeapi.co/api/v2/pokemon/${id}'

  const pokemonPromises = []

  for (let i = 1; 1 <= 150; i++){
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }

  Promise.all(pokemonPromises)
    .then(pokemons)

}
