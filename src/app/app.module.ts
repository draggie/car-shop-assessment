import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarService} from "./car.service";
import {HttpClientModule} from "@angular/common/http";
import {components} from "./components";

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
