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

  items = ["React", "Nodejs", "JavaScript",];
  newItem = "";
  editindex:any;
  public hide_update_btn:boolean;

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
    this.editindex = index;
    this.hide_update_btn = true;
     this.newItem = this.items[index];
  }
  change(){
    console.log(this.editindex);
    this.items[this.editindex] = this.newItem;
    this.hide_update_btn = false;
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
