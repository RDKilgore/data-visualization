// grabbing data from this site //memory location that never changes
const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14159

//jQuery command. wait until web page loads call function 
//whos name is in parantheses
//function call means run the code
// $(updateGraph)
// $(updateView)
// $(greeter)

// call function add (use it- make it run)
add(2,3);
//greeter is the function identifier. name is the functions
//argument (info it need todo its jobs)
function add(num1,num2){
    answer = num1 + num2;
    console.log("the answer is:" + answer);
    return answer;
}

function greeter(name){
    alert("Welcome to " + name + "data visualization")
}

greeter (" Rian Kilgore's")

var person = {name: "Rian", age: 32, car: {model: "Mazda", year: 2015}}
console.log ("My Name is " + person.name)
console.log ("My age is " + person.age)
console.log ("My car model is " + person.car.model)

if (person.age > 30) {
    alert ("you're older than 30")
}

//var year_list = []
var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data [2016]
console.log('year list is' + year_list) //will show as four objects.

console.log (year_list[0][9])
console.log (year_list[1][10])
console.log (year_list[2][11])
console.log (year_list[3][12])

// // function of update view 
// function updateView() {
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
// }
// //grabs the id ridecount  
// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h3#rideCount").html(numberOfRides)
// }

// console.log(numberOfRides)

// //creates chart 
// function updateGraph() {
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });
// }