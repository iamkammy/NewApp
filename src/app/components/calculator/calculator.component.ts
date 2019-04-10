import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  public  num1:number;
  public num2:number;
  public result:number;
add = 'Add';
Sub= 'Sub';
Mul= 'Mul';
DIV='DIV';
operation:string = 'operation';
  addition(){
    this.operation = 'Addition';
    this.result= this.num1+this.num2;
  }
  sub(){
    this.operation = 'Substraction';
    this.result= this.num1 - this.num2;
  }
  mul(){
    this.operation = 'Multiplication';
    this.result= this.num1 * this.num2;
  }
  div(){
    this.operation = 'Division';
    this.result= this.num1 / this.num2;
  }
}
