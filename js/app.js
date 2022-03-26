const $userInput = $('input')
const $button = $('#get-results')

$button.on('click', () => {
    let pokemon = $userInput.val().toLowerCase()
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then((data) => {
        console.log(data)
        // const $pokemonPic = ('<img id="pokemon-picture">')
        // $pokemonPic.attr('src', data.sprites.other.official-artwork.front_default)
        // $pokemonPic.appendTo('#serch-results')

        let pokemonType = null;

        for (let type of data.types) {
            pokemonType = type.type.name
        }

        console.log(pokemonType)
        // $.ajax(`https://pokeapi.co/api/v2/type/normal/`)
    }) 
})

//need a for of loop to iterate over data.types

//run types api in .catch

//find and comment the object paths

//for Pokemon search
//name - data.name
//type - (for loops) data.types[i].type.name
//picture - data.sprites.other.official-artwork.front_default

//for Type search
//name - data.name
//double damage from - data.damage_relations.double_damaage_from[i].name
//double damage to - data.damage_relations.double_damage_to[i].name
//half damage from - data.damage_relations.half_damage_from[i].name
//half damage to - data.damage_relations.half_damage_to[i].name
//no damage from - data.damage_relations.no_damage_from[i].name
//no damage to - data.damage_relations.half_damage_from[i].name