const $userInput = $('input')
const $button = $('#get-results')

$button.on('click', () => {
    let test = $userInput.val()
    test = test.toLowerCase()
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${test}/`).then((data) => {
        console.log(data)
    }) 
})

//need a for of loop to iterate over data.types

//run types api in .catch

//find and comment the object paths

//for Pokemon search
//name - data.name
//type - (for loops) data.types[i].type.name
//picture - data.sprites.official-artwork.front_default

//for Type search
//name - data.name
//double damage from - data.damage_relations.double_damaage_from[i].name
//double damage to - data.damage_relations.double_damage_to[i].name
//half damage from - data.damage_relations.half_damage_from[i].name
//half damage to - data.damage_relations.half_damage_to[i].name
//no damage from - data.damage_relations.no_damage_from[i].name
//no damage to - data.damage_relations.half_damage_from[i].name