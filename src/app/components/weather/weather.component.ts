import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service' 
import { Chart } from 'chart.js';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import swal from 'sweetalert2';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  zip;
  chart = [];
  hidden:boolean =true;
  error;
  constructor(private _weather: WeatherService) {}


loadweather(zip,inp){
  console.clear();
  console.log("khan "+zip );
  this.hidden = false;
  inp.value = "";
   
  this._weather.dailyForecast(zip)
  .subscribe(res => {
    
    let temp_max = res['list'].map(res => res.main.temp_max)
    let temp_min = res['list'].map(res => res.main.temp_min)
    let alldates = res['list'].map(res => res.dt)

    let weatherDates= []
    alldates.forEach((res) => {
      let jsdate = new Date(res * 1000)
      weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
    })

    
    console.log(weatherDates);
   this.hidden = true;
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: weatherDates,
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#abe095',
           
            borderWidth: 1,
            data: temp_max,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'orange',
           
            borderWidth: 1,
            data: temp_min,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })

  }, error => {
    this.hidden = true;
    this.error=  error;
    console.log(this.error.error.message)
    swal({
      type: 'error',
      text: `Sorry,  ${this.error.error.message}`
    });
  })
}
}
 