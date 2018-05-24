// this is the submit button
let searchBtn = document.querySelector('.search-btn') 

// this is the submit form
let searchBox = document.querySelector('.search-box')

// this is for the entire form box
let formBox = document.querySelector('.form-box')

// searchBtn.addEventListener('click', submitFunc);

// function submitFunc() {
//     console.log('submit');
// }

let nameInput = document.getElementById('name');

formBox.addEventListener('submit', function (e)  {

    e.preventDefault();

    console.log(nameInput.value);    
});

