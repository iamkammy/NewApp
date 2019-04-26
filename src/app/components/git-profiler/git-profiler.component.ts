import { Component, OnInit } from '@angular/core';
import { GitdataService } from '../../gitdata.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-git-profiler',
  templateUrl: './git-profiler.component.html',
  styleUrls: ['./git-profiler.component.scss']
})
export class GitProfilerComponent implements OnInit {

  constructor( private gitdata: GitdataService) { }
inputval;
error;
userdata;
repos:any;
loader:boolean = true;
  ngOnInit() {

  }
  
  show(){
    this.loader = false;
   
        this.gitdata.getUser(this.inputval).subscribe((data:any)   =>{
          this.loader = true;
          if(data){
            this.userdata = data;
          }
          console.log("data aaya",data, this.userdata)
    }, error =>{
      this.loader = true;
      this.error= error;
      console.log( "User "+this.error.error.message);
      swal({
        // title: data.Error,
        text: `Sorry For the Inconvenience, User ${this.error.error.message}`,
        type:"error"
        });
    })
    
  }

  reposfunc(){
     this.gitdata.getRepos(this.inputval).subscribe( (data:any) =>{
       this.repos = data;
       console.log(data);
     })
  }
  vacant(){
    this.userdata = "";
    this.repos = null;
  }

}
