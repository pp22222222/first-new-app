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
  cart_message:string  = " ";
  info:string = " ";
  // uname:string="";


  onAddCart(event)
  {
    this.cart_message = event.target.value + " Added to cart";
  }


  // onAddCart()
  // {
  //  this.message = "Item Addded in Cart";
  // }

  onGetInfo(input_info)
  {
    this.info = "description "+ input_info.value ;

  }
  // onInputClick(event)
  // {
  //   alert(event.target.value);
  // }

}
