import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mycomp/home/home.component';
import { PorjectsComponent } from './mycomp/porjects/porjects.component';
import { AboutComponent } from './mycomp/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PorjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
