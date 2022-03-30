const $userInput = $('input')
const $button = $('#get-results')

$( function() {
    const PokemonNameArr = []
    $.ajax(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`).then((pokemonName) => {
    for (let pName of pokemonName.results){
        PokemonNameArr.push(pName.name)
    } 
    })
    $('#user-input').autocomplete({
        source: PokemonNameArr,
        class: ".dropdown",
        appendTo:'test',
    })
})

$button.on('click', (event) => {
    event.preventDefault()

    $('.ui-helper-hidden-accessible').children().remove()

    $('#sbone').text('Strengths')
    $('#sbtwo').text('Weaknesses')

    let pokemonOrType = $userInput.val().toLowerCase()
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${pokemonOrType}/`).then((data) => {
        const $pokemonName = $(`<h2 id='pokemon-name'>${$userInput.val()}</h2>`)
        $pokemonName.appendTo('#search-results')

        const $pokemonPic = $('<img id="pokemon-picture">')
        $pokemonPic.attr('src', data.sprites.other['official-artwork'].front_default)
        $pokemonPic.appendTo('#search-results')

        let pokemonType = [];

        for (let type of data.types) {
            pokemonType.push(type.type.name)
        }

        pokemonType.forEach((typeName) => {
            $pokemonType = $(`<img class='type-icon' id='pokemon-results-icon' src='../images/wordIcons/${typeName}.png'>`)
            $($pokemonType).appendTo('#search-results')
        })

        $button.on('click', () => {
            $('#search-results').children().remove()})


        if (pokemonType.length === 1){
            $.ajax(`https://pokeapi.co/api/v2/type/${pokemonType}/`).then((data2) => {
                doubleDamageTo(data2)
                noDamageFrom(data2)
                halfDamageFrom(data2)
                doubleDamageFrom(data2)
                noDamageTo(data2)
                halfDamageTo(data2)
            })

        } else {
            noDamage(pokemonType)
             $.ajax(`https://pokeapi.co/api/v2/type/${pokemonType[0]}/`).then((data2) => {
                doubleDamageTo(data2)
                noDamageFrom(data2)
                halfDamageFrom(data2)
                doubleDamageFrom(data2)
                noDamageTo(data2)
                halfDamageTo(data2)
            })

            $.ajax(`https://pokeapi.co/api/v2/type/${pokemonType[1]}/`).then((data3) => {
                doubleDamageTo(data3)
                noDamageFrom(data3)
                halfDamageFrom(data3)
                doubleDamageFrom(data3)
                noDamageTo(data3)
                halfDamageTo(data3)
            })
        }

    })
    
    $.ajax(`https://pokeapi.co/api/v2/type/${pokemonOrType}/`).then((data4) => {
        const $typeName = $(`<div id='solo-icon'><img class='type-icon' id='pokemon-results-icon' src='../images/wordIcons/${pokemonOrType}.png'></div>`)
    $typeName.appendTo('#search-results')

    $('.list-boxes').css('background-color', 'rgba(192, 215, 236, 0.692)')
    $('#solo-icon').css('background-color', 'rgba(45, 154, 94, 0.77)')

    $button.on('click', () => {
        $('#search-results').children().remove()})

        doubleDamageTo(data4)
        noDamageFrom(data4)
        halfDamageFrom(data4)
        doubleDamageFrom(data4)
        noDamageTo(data4)
        halfDamageTo(data4)
    })

    function doubleDamageTo(info){
            $('.ssone').text('Double Damage To:')

            let dDT = []
                for (let types of info.damage_relations.double_damage_to) {
                    dDT.push(types.name)
                }
                if (dDT.length > 0){
                    dDT.forEach((name) => {
                        const $list = $('<li class="ddtl">')
                        $list.html(`<img class='type-icon' src='../images/wordIcons/${name}.png'>`)
                        $list.appendTo('#list-ddt')
                    })
                }else{
                    $('#list-ddt').html('<img class="placeholder-pics" src="../images/pokeball2.png">')
                }
                $button.on('click', () => {
            $('#list-ddt').children().remove()})
        }

    function noDamageFrom(info){
            $('.ssthree').text('No Damage From:')

             let nDF = []
                for (let types of info.damage_relations.no_damage_from) {
                    nDF.push(types.name)
                }
                if (nDF.length > 0){
                    nDF.forEach((name) => {
                        const $list = $('<li class="ndfl">')
                        $list.html(`<img class='type-icon' src='../images/wordIcons/${name}.png'>`)
                        $list.appendTo('#list-ndf')
                    })
                }else{
                    $('#list-ndf').html('<img class="placeholder-pics" src="../images/pokeball2.png">')
                }
                $button.on('click', () => {
            $('#list-ndf').children().remove()})
        }

        function halfDamageFrom(info){
            $('.ssfive').text('Half Damage From:')

             let hDF = []
                for (let types of info.damage_relations.half_damage_from) {
                    hDF.push(types.name)
                }
                if (hDF.length > 0){
                    hDF.forEach((name) => {
                        const $list = $('<li class="hdfl">')
                        $list.html(`<img class='type-icon' src='../images/wordIcons/${name}.png'>`)
                        $list.appendTo('#list-hdf')
                    })
                }else{
                    $('#list-hdf').html('<img class="placeholder-pics" src="../images/pokeball2.png">')
                }
                $button.on('click', () => {
            $('#list-hdf').children().remove()})
        }

        function doubleDamageFrom(info){
            $('.sstwo').text('Double Damage From:')

             let dDF = []
                for (let types of info.damage_relations.double_damage_from) {
                    dDF.push(types.name)
                }
                if (dDF.length > 0){
                    dDF.forEach((name) => {
                        const $list = $('<li class="ddfl">')
                        $list.html(`<img class='type-icon' src='../images/wordIcons/${name}.png'>`)
                        $list.appendTo('#list-ddf')
                    })
                }else{
                    $('#list-ddf').html('<img class="placeholder-pics" src="../images/pokeball2.png">')
                }
                $button.on('click', () => {
            $('#list-ddf').children().remove()})
        }

        function noDamageTo(info){
            $('.ssfour').text('No Damage To:')

             let nDT = []
                for (let types of info.damage_relations.no_damage_to) {
                    nDT.push(types.name)
                }
                if (nDT.length > 0){
                    nDT.forEach((name) => {
                        const $list = $('<li class="ndtl lists">')
                        $list.html(`<img class='type-icon' src='../images/wordIcons/${name}.png'>`)
                        $list.appendTo('#list-ndt')
                    })
                }else{
                    $('#list-ndt').html('<img class="placeholder-pics" src="../images/pokeball2.png">')
                }
                $button.on('click', () => {
            $('#list-ndt').children().remove()})
        }

        function halfDamageTo(info){
            $('.sssix').text('Half Damage To:')

             let hDT = []
                for (let types of info.damage_relations.half_damage_to) {
                    hDT.push(types.name)
                }
                if (hDT.length > 0){
                    hDT.forEach((name) => {
                        const $list = $('<li class="hdtl lists">')
                        $list.html(`<img class='type-icon' src='../images/wordIcons/${name}.png'>`)
                        $list.appendTo('#list-hdt')
                    })
                }else{
                    $('#list-hdt').html('<img class="placeholder-pics" src="../images/pokeball2.png">')
                }
                $button.on('click', () => {
            $('#list-hdt').children().remove()})
        }
        // function noDamage(types){
        //     let noDamageTo = []
        //     let noDamageFrom = []
        //     types.forEach((type) =>{
        //         //push into the two arrays
        //     })
        //     if (noDamageTo.length > 0){

        //     }else{
        //         //pokeball
        //     }
        // }   
})