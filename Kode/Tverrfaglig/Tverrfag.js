// settings \/
let settings = document.getElementById("settings");

settings.addEventListener("click", openSettings);
function openSettings() {
    
}
// settings /\

// Matsvinn mat chart \/
const FoodChart = document.getElementById("FoodChart");

new Chart(FoodChart,{
    type: 'pie', // type of chart
    data: {
        labels: ['Bakevarer', 'Midagsrester', 'Frukt&Grønt', 'Meieriprodukter', 'Annet'], // x values
        datasets: [{
            label: 'Prosent mat',
            data: [21, 20, 19, 11, 29], // y values
            borderWidth: 1
        }]
    },// skaper grafen \/
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
}); // skaper grafen /\
// Matsvinn mat chart /\

// Matsvinn hvem chart \/
const CulpritChart = document.getElementById("CulpritChart");

new Chart(CulpritChart,{
    type: 'pie', // type of chart
    data: {
        labels: ['Husholdninger', 'Matindustri', 'Dagligvare', 'Jordbruk', 'Servering', 'Sjømat industri', 'Grossist', 'Kiosk, bensin- og servicehandel', 'Offentlig sektor'], // x values
        datasets: [{
            label: 'Prosent av hvem',
            data: [48, 19, 15, 9, 3, 3, 1, 1, 1], // y values
            borderWidth: 1
        }]
    },
    // options: {
        // scales: {
            // y: {
                // beginAtZero: true
            // }
        // }
    // }
});
// Matsvinn hvem chart /\

// prepares necesary elements for the game \/
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let player = document.getElementById("player");

pauseButton.style.display = "none";
player.style.display = "none";
// preparess necesary elements for the game /\

// when start button clicked, you can play the game \/
playButton.addEventListener("click", startGame);
function startGame() {
    playButton.style.visibility = "hidden";
    pauseButton.style.display = "block";
    player.style.display = "block";
}
// when start button clicked, you can play the game /\

// when pause button clicked, the game stops \/
pauseButton.addEventListener("click", pauseGame);
function pauseGame() {
    pauseButton.style.display = "none";
    playButton.style.visibility = "visible";
    player.style.display = "none";
}
// when pause button clicked, the game stops /\

function whichKey(event) {
    let key = event.key;
    console.log(key)
}