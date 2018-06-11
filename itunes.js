
const display = document.querySelector('.search-results')

// this is for the entire form box
const formBox = document.querySelector('.form-box')

// this is the submit button
const searchBtn = document.querySelector('.search-btn') 

// this is the text search box
let searchBox = document.querySelector('.search-box');

const error = document.querySelector('.error');

formBox.addEventListener('submit', function (e) {
    e.preventDefault();
    display.textContent = ''
    // console.log(searchBox.value, 'value');
    let userInput = searchBox.value;
    // console.log(userInput)
    let url = `https://itunes.apple.com/search?term=${userInput}`
    // console.log(url, "url")
     
    fetch(url)
    .then(
        function (response){
            return response.json()
        }
    )
    .then (
        function(data) {
            // console.log(data, "data")
            // info is the array of data.results
            let info = data.results
                // console.log(info, "info")
            // for (i=0; i<info.length; i++)
            // find a way to identify incorrect userInputs
            if (userInput === '' || userInput === '' || userInput === '' ) {
                // console.log('error')
                error.textContent = 'Not Found'
            }

            for (i=0; i<3; i++) {
                // console.log(info[i], "array of info")
                // tracks is all the stuff inside the info array
                let tracks = info[i]
                // console.log(tracks, "tracks")
                let searchList = 
                `
                <div class='search-list'>
                    <div class='song-info-div'>
                        <p class='artist'>${tracks.artistName}</p>
                        <p class='song-title'>${tracks.trackName}</p>
                    </div>
                    <div class='song-btn-div'>
                        
                        <button class='song-button'>${tracks.previewUrl}</i></button>
                        <i class="fas fa-play">
                    </div>
                </div>
                `
               
                display.insertAdjacentHTML('beforeend', searchList)
                
            }  
            
            let songBtn = document.querySelectorAll('.song-button')
                // console.log('songBtn',songBtn)
                for (i=0; i< songBtn.length; i++) {
                    songBtn[i].addEventListener('click', function (e) {
                        songURL = e.target.innerHTML
                        // console.log('song url', songURL)
                        // console.log('click')
                        let audioPlayer = document.querySelector('audio')
                        audioPlayer.src = songURL
                        // console.log('ap src',audioPlayer.src)
                        console.log('source', audioPlayer.src)
                    })
                } 
        }) 
}); 

/* <button class='song-button'><i class="fas fa-play">${tracks.previewUrl}</i></button>
 */




/* <h4>Listen:${tracks.previewUrl}</h4> */

// let audioPlayer = document.querySelector('.audio-player')

// document.querySelector('.searchList').addEventListener("click", function(e) {
//     if (e.target && e.target.nodeName == "IMG") {
//       audioPlayer.src = e.target.getAttribute("value")
//     }
//   })




// when button is clicked audio player plays url from track
// when 'play' button is clicked on audio player...





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
