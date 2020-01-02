import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  mypro:boolean=true;
  mystyle1:string = "15px";
  mystyle2:string = "25px";
  isactive:boolean= false;
message:string 
// myInputText:string="Tej Patel"


  onAddCart()
  {
   this.message = "Item Addded in Cart";
  }

  onInputClick(event)
  {
    alert(event.target.value);
  }

}
