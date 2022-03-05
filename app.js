const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(30).fill().map((_, index) => 
fetch(getPokemonUrl(index + 1)).then(response => response.json())) 

const generateHTML = pokemons => pokemons.reduce((accumulator, {name, id, types, abilities}) => {
	const elementTypes = types.map(typeInfo => typeInfo.type.name)
	const elementAbilities = abilities.map(abilityInfo => abilityInfo.ability.name)


accumulator += `
	<li class="card ${elementTypes[0]}">
		<h2 class="card-title">${name}</h2>
		<p class="card-subtitle"><strong>Tipo:</strong> ${elementTypes.join(' | ')}</p>
		<p class="card-subtitle"><strong>Habilidades:</strong> ${elementAbilities.join(' | ')}</p>
	</li>
`	
	return accumulator
},'')
	
const insertPokemonsIntoPage = pokemons => {
	const ul = document.querySelector('[data-js="pokedex"]')
	ul.innerHTML = pokemons
}	

 const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises)
.then(generateHTML)
.then(insertPokemonsIntoPage)
	