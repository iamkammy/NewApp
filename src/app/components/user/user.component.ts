import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string ;
  constructor() { 
    console.log("constructor ran...")
  }

  ngOnInit() {
    console.log("ng oniniit  ran...")
    this.name = 'kammy ikhna'
  }

}
