import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
public url:any;
  dailyForecast(zip){
    this.url = "https://api.openweathermap.org/data/2.5/forecast?q="+zip+"&appid=984c9f59ed850fb1a3c99136a045d266";

    return this.http.get(this.url)
             .pipe( map(result => result) );
  }
}
