import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-reward-point',
  templateUrl: './reward-point.page.html',
  styleUrls: ['./reward-point.page.scss'],
})
export class RewardPointPage implements OnInit {

  visibleOne = false;
  visibleTwo = false;
  visibleThree = false;
  
  selected = false;
  createdCode = null;

  rrcode() {
    this.createdCode = "dcbsdjhcbsdcsdc";
    console.log(this.createdCode);
  }
  toggleColor(name) {
    if (this.selected === false) {
      this.selected = true;
      console.log(name);
    } else if (this.selected === true) {
      this.selected = false;
    } 
  }

  toggleOne() {
    if (this.visibleOne === false) {
      this.visibleOne = true;
      console.log("1");
    } else if (this.visibleOne === true) {
      this.visibleOne = false;
    }    
  }

  toggleTwo() {
    if (this.visibleTwo === false) {
      this.visibleOne = true;
      this.visibleTwo = true;
      console.log("2");
    } else if (this.visibleTwo === true) {
      this.visibleOne = false;
      this.visibleTwo = false;
    }    
  }

  toggleThree() {
    if (this.visibleThree === false) {
      this.visibleOne = true;
      this.visibleTwo = true;
      this.visibleThree = true;
      console.log("3");
    } else if (this.visibleThree === true) {
      this.visibleOne = false;
      this.visibleTwo = false;
      this.visibleThree = false;
    }    
  }
  
  constructor() { }

  ngOnInit() {
    
  }

}
