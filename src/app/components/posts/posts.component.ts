import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Observable} from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Object;
  loading: boolean;
  constructor(private data:DataService) {
     this.loading = false;
   }

  ngOnInit() {
  }
  
  get(){
    // this.data.GetPosts().subscribe (
    //   data => this.posts= data 
    // );

    // this.data.GetPosts()
    // .then((response)=>{
    //   response.json().then((data)=>{
    //     this.posts = data;
    //   })
    // })
    // .catch((err)=>{
    //   console.log("Error generated" +err);
    // });



// testing javascript
// const a = function(){
//   var a = 'TYpe script var char';
//   setTimeout(()=>  alert(a),3000);
// }
// a();
 this.GetPosts();
  }
  
  async GetPosts(){
    this.loading = true;
    let response = await this.data.GetPosts();
    let data = await response.json();
    this.posts = data;
    this.loading = false;
  }
 
}
