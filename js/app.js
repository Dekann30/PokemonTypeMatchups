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