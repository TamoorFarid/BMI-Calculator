import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weight!: number;
  height!: number;
  result!: number;
  welcome: boolean = true;
  underweight: boolean = false;
  normalweight: boolean = false;
  overweight: boolean = false;
  obesity: boolean = false;
  underWeightAler: boolean = false;
  normalWeightAler: boolean = false;
  overWeightAler: boolean = false;
  obeseAler: boolean = false;

  constructor(private fb: FormBuilder) {}

  clickme() {
    this.result = (this.weight / this.height / this.height) * 10000;
    if (this.result <= 18.5) {
      console.log('You are underweight');
      this.welcome = false;
      this.overweight=false;
      this.obesity=false;
      this.normalweight = false;
      this.underweight = true;
      this.underWeightAler = true;
      setTimeout(() => {
        this.underWeightAler = false;
      }, 5000);
    }
    if (this.result > 18.5 && this.result < 25) {
      console.log('YOu have a normal weight');
      this.welcome = false;
      this.overweight=false;
      this.underweight=false;
      this.obesity=false;
      this.normalweight = true;
      this.normalWeightAler = true;
      setTimeout(() => {
        this.normalWeightAler = false;
      }, 5000);
    }
    if (this.result >= 25 && this.result <= 29.9) {
      console.log('YOu are oveweight');
      this.welcome = false;
      this.overweight=false;
      this.obesity=false;
      this.normalweight = false;
      this.overweight = true;
      this.overWeightAler = true;
      setTimeout(() => {
        this.overWeightAler = false;
      }, 5000);
    }
    if (this.result > 30) {
      console.log('YOu are obese');
      this.welcome = false;
      this.overweight=false;
      this.underweight=false;
      this.normalweight = false;
      this.obesity = true;
      this.obeseAler = true;
      setTimeout(() => {
        this.obeseAler = false;
      }, 5000);
    }
    this.weight = 0;
    this.height = 0;
  }
}
