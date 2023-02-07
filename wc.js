const data = {
  labels: ['China', 'Chad', 'Uganda', 'German'],
  datasets: [{
    label: 'WorldCup',
    data: [63, 19, 30, 30],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
function showChartData(type){
  const point1labels = ['Eritrea', 'Ghana', 'Argentina', 'Morroco'];
  const point2labels = ['China','Chad','Uganda','France']
  const point3labels = ['Ethiopia','USA','Egypt','Sudan']
  const point4labels = ['Russia','Djbouti','Kenya','Ukrain']
  
  const point1 = [65, 40, 50, 27];
  const point2 = [63, 19, 30, 30];
  const point3 = [88, 1, 3, 5];
  const point4 = [72, 32, 50, 20];
  if(type=== 'point1'){ 
    myChart.data.datasets[0].data = point1;
    myChart.data.labels = point1labels;
  }
  if(type=== 'point2'){ 
    myChart.data.datasets[0].data = point2;
    myChart.data.labels = point2labels;
  }
  if(type=== 'point3'){ 
    myChart.data.datasets[0].data = point3;
    myChart.data.labels = point3labels;
  }
  if(type=== 'point4'){ 
    myChart.data.datasets[0].data = point4;
    myChart.data.labels = point4labels;
  }

  myChart.update();
}
