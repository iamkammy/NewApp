import { Component, OnInit } from '@angular/core';
import { GitdataService } from '../../gitdata.service';
@Component({
  selector: 'app-git-profiler',
  templateUrl: './git-profiler.component.html',
  styleUrls: ['./git-profiler.component.scss']
})
export class GitProfilerComponent implements OnInit {

  constructor( private gitdata: GitdataService) { }
inputval;
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
    })
    this.reposfunc();
    
  }

  reposfunc(){
     this.gitdata.getRepos(this.inputval).subscribe( (data:any) =>{
       this.repos = data;
       console.log(data);
     })
  }

}
