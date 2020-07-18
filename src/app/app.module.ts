import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgwWowModule } from 'ngx-wow';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    AppRoutingModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


