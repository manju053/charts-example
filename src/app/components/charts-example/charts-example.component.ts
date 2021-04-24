import { Component, OnInit, ViewChild } from '@angular/core';
import  { Chart, registerables  } from 'chart.js';
import chartdata from '../../../chart-data.json';

Chart.register(...registerables);
@Component({
  selector: 'app-charts-example',
  templateUrl: './charts-example.component.html',
  styleUrls: ['./charts-example.component.css']
})
export class ChartsExampleComponent implements OnInit {

  @ViewChild('myCanvas') myCanvas;
  @ViewChild('myCanvas2') myCanvas2;
  constructor() { }
  chart;
  lineChart;
  ngOnInit(): void {
    // Chart.register(...registerables);
  }

  ngAfterViewInit() {
    let ctx = this.myCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx,  {
      type: 'bar',
      data: {
        //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: chartdata.results,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
            //   barThickness: 50,
              categoryPercentage: 0.5,
              barPercentage: 0.2,
              stack: 'true'

          }]
      },
      options: {
          
          scales: {
              y: {
                  beginAtZero: true
              },
              
          },
          parsing: {
            xAxisKey: 'month',
            yAxisKey: 'price'
        },
        layout: {
            padding: 20
        },
        
      },
  }
    
  )

  let ctx2 = this.myCanvas2.nativeElement.getContext('2d');
  this.lineChart = new Chart(ctx2, {
      type: 'line',
      data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
      }
   
  })
  }

}
