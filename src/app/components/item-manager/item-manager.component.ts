import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css']
})
export class ItemManagerComponent implements OnInit {
  ngOnInit() {
    
  }

  items = [];
  newItem = "";
  editindex:any;
  updatebtn:boolean = false;
  fetchdata = [];
  fetchbtn:boolean = false;

  @ViewChild("name") nameField: ElementRef;
  editName(): void {
    this.nameField.nativeElement.focus();
  }

  formsub = function (e:NgForm) {
    console.log(e);
  }

  pushItem = function () {
    if (this.newItem != "") {
      this.items.push(this.newItem);
      console.log(this.items.index);
      //  swal("wow done");
      this.newItem = "";
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        animation: true,
        customClass: 'animated tada',
        footer: '<p href>Because You have not entered any value</p>'
      })
    }
        localStorage.setItem("Array of Items", JSON.stringify(this.items));
  }

  fetchtodos(){
    this.fetchbtn = true;
     this.fetchdata = JSON.parse( localStorage.getItem("Array of Items") );
    console.log(this.fetchdata);
  }
  removeItem = function (index) {
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
      } else {
        swal(

          'Your file is saved.',
          'success'
        )
      }
    })

  }
  update(index:any){
    this.updatebtn = true;
    this.editindex = index;
     this.newItem = this.items[index];
  }
  change(name){
    
    this.updatebtn = false;
    console.log(this.editindex);
    this.items[this.editindex] = this.newItem;
    name.value = "";
  }
  // editItem:any;
  // editIndex = 0;
  // editItemFunc(index: any) {
  //   // this.edit = val;
  //   this.editIndex = index;
  //   console.log(index.value);
  //   // val = this.editItem;
  // }
  // savechange(x: string) {
  //   this.items[this.editIndex] = x;
  //   console.log(x);
  // }
}
