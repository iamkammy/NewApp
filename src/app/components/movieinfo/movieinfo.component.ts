import { Component, OnInit } from '@angular/core';
import { MoviedetailsService } from '../../moviedetails.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})
export class MovieinfoComponent  {

constructor(private moviedata: MoviedetailsService){}
  recentVal:any;
     hidden:boolean = true;
movie:string;
  onKey(e:any)
  { 
    console.log( typeof(e));
    this.movie = e.target.value;
    console.log(this.movie);
  }

  getMovies(){
    this.hidden = false;
   this.moviedata.getDetails(this.movie).subscribe(( data:any)=> 
      {
      this.recentVal = data.Search;
         this.hidden = true;

       console.log(this.recentVal)
        if(data.Response == "False"){
          swal({
            // title: data.Error,
            text: "Sorry For the Inconvenience",
            type:"error"
            });
        }
      } )

  }

movieSelected(id:any){
  sessionStorage.setItem('movieId', id);
  console.log(id);
  return false;
}
}
