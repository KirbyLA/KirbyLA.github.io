// settings \/
let settings = document.getElementById("settings");

settings.addEventListener("click", openSettings);
function openSettings() {

}
// settings /\

// lets you stop the sticky ménu \/
let X = document.getElementById("X");

X.addEventListener("click", closeMenu);
function closeMenu() {
    X.style.backgroundColor = "red"
}
// lets you stop the sticky ménu /\

// chart \/
const testChart = document.getElementById("chart");

new Chart(testChart,{
    type: 'bar', // type of chart
    data: {
        labels: ['Papa', 'lebbie', 'trash', 'meep', 'glurb', 'ggoboo', 'Abbseluggelugle'], // x values
        datasets: [{
            label: 'thing',
            data: [20, 6, 8, 10, 2, 13, 25], // y values
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// chart /\

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