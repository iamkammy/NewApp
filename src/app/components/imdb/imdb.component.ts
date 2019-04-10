import { Component, OnInit } from '@angular/core';
import { MoviedetailsService } from '../../moviedetails.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.scss']
})
export class ImdbComponent implements OnInit {
public data:any;
  constructor( private imdbdata: MoviedetailsService) { }

  ngOnInit() {
    this.imdbdata.getfulldetails().subscribe((response:any)=>{
      this.data = response;
      console.log(response);
    })
  }
  downloadMovie(){
    window.location.href= "https://erosnow.com/movies/mostpopular";
  }

}
