import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component {

  items: Array<any> = [];
  updatebtn: boolean;
  newItem: any;
  currentIndex;
  checkboxArray = [];
  show:boolean;
 showAray = [];
  pushItem() {
    this.items.push(this.newItem);
    this.newItem = "";
    console.log(this.items);
    localStorage.setItem("Second Array of Item2", JSON.stringify(this.items))
  }

  update(index, ref) {
    console.log(index);
    this.currentIndex = index;
    this.updatebtn = true;
    this.newItem = this.items[index];
    ref.focus();
  }
  removeItem(i) {
    this.items.splice(i, 1);
  }
  change() {
    this.items[this.currentIndex] = this.newItem;
    localStorage.setItem("Second Array of Item2", JSON.stringify(this.items))
    this.newItem = "";
    this.updatebtn = false;
  }

  checkbox(isChecked, i) {
    // console.log(isChecked);
    if (isChecked == true) {
      this.checkboxArray.push(i);
    }
    console.log(this.checkboxArray);
  }

  // deleteselected() {
  //   //  alert("are you sure you wanted to delete these things");
  //   //  this.checkboxArray.forEach((x)=>{
  //   //    if( this.items.includes(x) ){
  //   //      this.items.splice(x,1);
  //   //    }

  //   //    })
  //   // console.log(this.checkboxArray)
  //   var temp=[]
  //   this.items.forEach(
  //     (item, index) => {
  //       if (typeof this.checkboxArray.find(i => i == index)=='undefined') {
  //         temp.push(item)
  //       }
  //     }
  //   )

  //   this.items=temp;

  // }

  deleteselected(){ 
    var temp = [];
   this.items.forEach( (item, index)=>{
     if( typeof this.checkboxArray.find(i => i == index) == 'undefined' ){
      temp.push(item)
     }
   })
   this.items = temp;
  }

  clearAll(){
    this.items= [];
  }

  showAll(){
    this.show = true;
    this.showAray = JSON.parse (localStorage.getItem('Second Array of Item2'));
   
  }

}
