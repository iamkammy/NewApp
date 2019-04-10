import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';



@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css']
})
export class ItemManagerComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
 items= ["React", "Angular", "JavaScript", "Nodejs"];
 newItem= "";
 check(){

 }
 pushItem = function (){
   if(this.newItem != ""){
     this.items.push(this.newItem);
     console.log(this.items.index);
    //  swal("wow done");
     this.newItem = "";
   } else{
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      animation: true,
  customClass: 'animated tada',
      footer: '<p href>Because You have not entered any value</p>'
    })
   }
 }
removeItem = function(index){
  console.log(index);

  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      this.items.splice(index, 1);
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else{
      swal(
        
        'Your file is saved.',
        'success'
      )
    }
  })
  
}

editItem;
editItemFunc(val:any){
  console.log(val);
  this.editItem = val;
}
savechange(){
  
}
}
