import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = { 
    plotOptions: {
      series: {
        pointStart: 2010
      }
    },
    series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      type: 'line'
    },{
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      type: 'line'
    },
    {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      type: 'line'
    }]
   };
  constructor() { }

  ngOnInit(): void {
  }

}
