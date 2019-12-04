// a memory location that never changes
const BASE_URL = "https://zagster-service.herokuapp.com"

//call function updateView after the page loads
$(updateView)


//Arrays to hold data points pulled from JQUERY
var my_data = []
// var my_months = [] //

//updateView() function definition
//this function gets JSON data from the web server endpoint /rides/count/per_month and calls the function perYear()
//after the function perYear runs it will call the function updateChart()
function updateView() {
  
  $.when ($.getJSON(BASE_URL + "/rides/count/per_hour", perHour), 
    ).then(updateChart);
}


// This is what your JSON data looks like
//If you type https://zagster-service.herokuapp.com/rides/count/per_hour in your web browser, you'll see this data
//{"0":429,"1":231,"2":130,"3":85,"4":42,"5":1,"7":1,"8":17,"9":16,"10":795,"11":425,"12":921,"13":846,"14":1795,"15":1789,"16":2119,"17":1630,"18":1942,"19":1637,"20":1636,"21":1054,"22":843,"23":710}

// Funtion definition for perYear(data)
// The data argument is your JSON data
// This function extracts information from your JSON data and put it in an array called my_data
// 
function perHour(data) {

    hours = []
    for(i=0; i<24; i=i+1){
        console.log(data[i]) //print data to the console to make sure we did it right
        my_data.push(data[i]) 
        hours.push(i)
    }
    $(updateChart(my_data, hours))
   //add the data to the my_data array 
     
  }
  
// Funtion definition for updateChart()
// This function creates your chart
// Make sure you have a <canvas> element in your index with an id="myChart"
function updateChart(my_data, hours) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: hours,
            datasets: [{
                label: 'Zagster Number of Rides Per hour',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                //data: [0, 10, 5, 2, 20, 30, 45]
                data: my_data
            }]
        },

        // Configuration options go here
        options: {

        }
    });
}
// Below is other form of for loop

// console.log(data2017[0][1]) 
// my_data.push(data2017[0][1]) 
// console.log(data2017[1][2])  
// my_data.push(data2017[1][2])
// console.log(data2017[2][3])
// my_data.push(data2017[2][3])
// console.log(data2017[3][4])
// my_data.push(data2017[3][4])
// console.log(data2017[4][5])
// my_data.push(data2017[4][5])
// console.log(data2017[5][6])
// my_data.push(data2017[5][6])

