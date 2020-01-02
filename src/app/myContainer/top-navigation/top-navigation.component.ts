import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
dyname = "Tej";
stat:boolean= true;
myStatus()
{
  return this.stat ? "Online" : "Offline" ;
}
  constructor() { }

  ngOnInit() {
    
  }

}