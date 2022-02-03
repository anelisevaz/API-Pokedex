const fetchPokemon = () => {
  const getPokemonUrl = id => 'https://pokeapi.co/api/v2/pokemon/${id}'

  const pokemonPromises = []

  for (let i = 1; 1 <= 150; i++){
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      const liPokemons = pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

        accumulator +='
          <li class=card>
          <img class="card-image ${types[0]}" alt="${pokemon.name} src=">
        '
      })
    })

}
