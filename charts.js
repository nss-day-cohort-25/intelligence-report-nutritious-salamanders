let myLineChart = document.querySelector('#lineChart').getContext('2d'),
    myBarChart = document.querySelector('#barChart').getContext('2d'),
    gradientStroke = myLineChart.createLinearGradient(0, 0, 0, 300);

gradientStroke.addColorStop(0, "#AEE2F7");
gradientStroke.addColorStop(1, "#FFF");

let lineChart = new Chart(myLineChart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total commits',
            data: [6, 2, 10, 12, 15, 12, 3, 1, 17, 14, 11, 15],
            backgroundColor: gradientStroke,
            borderColor: '#039BE5'
        }]
    },
    options: {
        layout: {
            padding: {
                left: 35,
                right: 45,
                top: 40,
                bottom: 40
            }
        },
        legend: {
            display: false
        }
    }

})

let barChart = new Chart(myBarChart, {
    type: 'bar',
    data: {
        labels: ['Biz 1', 'Biz 2', 'Biz 3', 'Biz 4'],
        datasets: [
            {
                backgroundColor: ['#039BE5', '#039BE5', '#039BE5', '#039BE5'],
                data: [500, 204, 321, 482, 351, 261]
            },
            {
                backgroundColor: ['#AEE2F7', '#AEE2F7', '#AEE2F7', '#AEE2F7'],
                data: [100, 204, 321, 482, 351, 261]
            }
        ]
    },
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    },
    options: {
        layout: {
            padding: {
                left: 30,
                right: 40,
                top: 40,
                bottom: 30
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]

        }
    }
});

function initMap() {
    let locations = [
        {lat: 53.3498, lng: -6.2603},
        {lat: 53.360115, lng: -6.580287},
        {lat: 53.650918, lng: -7.707415},
        {lat: 54.208713, lng: -6.504412},
        {lat: 55.035570, lng: -6.790057},
        {lat: 51.913855, lng: -9.602557},
    ];

    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: {lat: 54.208713, lng: -6.504412}
    });

    locations.forEach(place => {
        let marker = new google.maps.Marker ({
            position: place,
            map: map

        })
    });
  }