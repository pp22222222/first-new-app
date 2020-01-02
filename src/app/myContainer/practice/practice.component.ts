import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

status:boolean=true;

dyname:string = "Tej Patel";
enabled:boolean= true;

}