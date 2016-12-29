import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {API_KEY} from "./key.config";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MarkerService} from "./services/marker.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
