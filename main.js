$(updateGraph)
$(updateView)
// grabbing data from this site 
const BASE_URL = "https://zagster-service.herokuapp.com"
//function of update view 
function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}
//grabs the id ridecount  
function updateRideCount(data) {
  numberOfRides = data.count
  $("h3#rideCount").html(numberOfRides)
}
//creates chart 
function updateGraph() {
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
}