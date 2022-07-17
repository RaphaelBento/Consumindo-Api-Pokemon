const fetchPOkemon = () => {
    const urlPokemons = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const PokemonPromisses=[]

    for(let i =1 ; i <= 150;i++){

    PokemonPromisses.push(fetch(urlPokemons(i)).then(response => response.json()))
    }Promise.all(PokemonPromisses)
.then(pokemons => {
    console.log(pokemons)
const listaPOkemons = pokemons.reduce((accumulator,pokemon) =>{
const types = pokemon.types.map(typeInfo => typeInfo.type.name)    
accumulator += `
<li class="card ${types[0]}">
<img  alt="${pokemon.name}" src="https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png">
<h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
<p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join('|')}  </p>
</li>`

return accumulator
} ,'')

const ul = document.querySelector('[data-js="pokedex"]')

ul.innerHTML = listaPOkemons

}) 
} 


fetchPOkemon()