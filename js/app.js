const $userInput = $('input')
const $button = $('#get-results')

$button.on('click', () => {
    let pokemon = $userInput.val().toLowerCase()
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then((data) => {
        const $pokemonName = $(`<h2 id='pokemon-name'>${$userInput.val()}</h2>`)
        $pokemonName.appendTo('#search-results')

        const $pokemonPic = $('<img id="pokemon-picture">')
        $pokemonPic.attr('src', data.sprites.other['official-artwork'].front_default)
        $pokemonPic.appendTo('#search-results')

        let pokemonType = [];

        for (let type of data.types) {
            pokemonType.push(type.type.name)
        }

        const $pokemonType = $(`<h3 id='pokemon-type'> Type: ${pokemonType.join(' and ')}</h3>`)
        $($pokemonType).appendTo('#search-results')

        $button.on('click', () => {
            $('#search-results').children().remove()})

        console.log(pokemonType)

        if (pokemonType.length === 1){
            $.ajax(`https://pokeapi.co/api/v2/type/${pokemonType}/`).then((data2) => {
                console.log(data2)
                doubleDamageTo(data2)
            })

        } else {
             $.ajax(`https://pokeapi.co/api/v2/type/${pokemonType[0]}/`).then((data2) => {
            console.log(data2)
            })

            $.ajax(`https://pokeapi.co/api/v2/type/${pokemonType[1]}/`).then((data3) => {
                console.log(data3)
            })
        }
        
        function doubleDamageTo(info){
            let dDT = []
                for (let types of info.damage_relations.double_damage_to) {
                    dDT.push(types.name)
                }
                console.log(dDT)
                dDT.forEach((name) => {
                    const $list = $('<li class="ddtl">')
                    $list.text(name)
                    $list.appendTo('#list-ddt')
                    console.log(name)
                })
        }

    }) 
})

//need a for of loop to iterate over data.types

//run types api in .catch

//find and comment the object paths

//for Pokemon search
//name - data.name
//type - (for loops) data.types[i].type.name
//picture - data.sprites.other[official-artwork].front_default

//for Type search
//name - data.name
//double damage from - data.damage_relations.double_damaage_from[i].name
//double damage to - data.damage_relations.double_damage_to[i].name
//half damage from - data.damage_relations.half_damage_from[i].name
//half damage to - data.damage_relations.half_damage_to[i].name
//no damage from - data.damage_relations.no_damage_from[i].name
//no damage to - data.damage_relations.half_damage_from[i].name