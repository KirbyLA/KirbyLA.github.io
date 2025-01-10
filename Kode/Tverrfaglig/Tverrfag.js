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