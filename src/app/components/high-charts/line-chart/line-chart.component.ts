import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Basic Line Chart'
    },
    plotOptions: {
      series: {
        pointStart: 2010,
        cursor: 'pointer',
        point: {
          events: {
            click: function (e) {
              this.series.chart.update({
                tooltip: {
                  enabled: true
                }
              })
            },

            mouseOver: function (e) {
              this.series.chart.update({
                tooltip: {
                  enabled: false
                }
              })
            }
          }
        }
      },

    },
    tooltip: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      type: 'line'
    }, {
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

  chartOptions2: Highcharts.Options = {
    chart: {
      scrollablePlotArea: {
        minWidth: 700
      }
    },

    data: {
      csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
      beforeParse: function (csv) {
        return csv.replace(/\n\n/g, '\n');
      }
    },

    title: {
      text: 'Daily sessions at www.highcharts.com'
    },

    subtitle: {
      text: 'Source: Google Analytics'
    },

    xAxis: {
      tickInterval: 7 * 24 * 3600 * 1000, // one week
      tickWidth: 0,
      gridLineWidth: 1,
      labels: {
        align: 'left',
        x: 3,
        y: -3
      }
    },

    yAxis: [{ // left y axis
      title: {
        text: null
      },
      labels: {
        align: 'left',
        x: 3,
        y: 16,
        format: '{value:.,0f}'
      },
      showFirstLabel: false
    }, { // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null
      },
      labels: {
        align: 'right',
        x: -3,
        y: 16,
        format: '{value:.,0f}'
      },
      showFirstLabel: false
    }],

    

   

    legend: {
      align: 'left',
      verticalAlign: 'top',
      borderWidth: 0
    },



    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function (e) {
              this.series.chart.update({
                tooltip: {
                  enabled: true
                }
              })
            },

            mouseOut: function (e) {
              this.series.chart.update({
                tooltip: {
                  enabled: false
                }
              })
            }
             
          }
        },
        marker: {
          lineWidth: 1
        }
      }
    },
    series: [{
      name: 'All sessions',
      lineWidth: 4,
      type: 'line',
      marker: {
        radius: 4
      }
    }, {
      name: 'New Users', type: 'line'
    }],

    tooltip: {
      enabled: false
    }


  }
  constructor() { }

  ngOnInit(): void {
  }

}
