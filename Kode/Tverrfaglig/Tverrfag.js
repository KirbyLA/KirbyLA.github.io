let settings = document.querySelector(".ménu>img");

settings.addEventListener("click", openSettings);
function openSettings() {

}

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