import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedetailsService {

  constructor(private http:HttpClient) { }
public imdb_id:any;
  getDetails(val:any){

    return this.http.get(`http://www.omdbapi.com/?s=${val}&apikey=9e930b0`);
  }
  getfulldetails(){
    this.imdb_id = sessionStorage.getItem('movieId');
    return this.http.get(`http://www.omdbapi.com/?i=${this.imdb_id}&apikey=9e930b0`);
  }
}
