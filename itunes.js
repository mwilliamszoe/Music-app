
// this is for the entire form box
const formBox = document.querySelector('.form-box')

// this is the submit button
const searchBtn = document.querySelector('.search-btn') 

// this is the text search box
let searchBox = document.querySelector('.search-box');

formBox.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(searchBox.value);
    let userInput = searchBox.value;
    // console.log(userInput)
    let url = `https://itunes.apple.com/search?term=${userInput}`
    // console.log(url)
     
    fetch(url)
    .then(
        function (response){
            return response.json()
        }
    )
    .then (
        function(data) {
            console.log(data)
        }
    )

}); 





// this is the text box
// let searchBoxOne = document.querySelector('.search-box')
// let searchBoxTwo = document.getElementById('#search-box')

// let userInput = searchBox.value




// formBox.addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(searchBoxOne);    
// });


/* <form class="pure-form">
    <input id="name" type="text" placeholder="Enter Name" />
    <button type="submit"><i class="fa fa-chevron-circle-right"></i></button>
</form> */

// var nameInput = document.getElementById('name');

// document.querySelector('form.pure-form').addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(nameInput.value);    
// });
