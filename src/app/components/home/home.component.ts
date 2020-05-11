import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.count += 1;
  }

  setClasses() {
    let myClasses = {
      display: this.name.length > 7,
      dontdisplay: this.name.length <= 7
    };
    return myClasses;
  }
}
