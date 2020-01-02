import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopNavigationComponent } from './myContainer/top-navigation/top-navigation.component';
import {MyContainer} from  './myContainer/mycontainer.component';
import { PracticeComponent } from './myContainer/practice/practice.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyContainer,TopNavigationComponent, PracticeComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
