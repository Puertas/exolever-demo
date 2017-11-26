import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConsultantsComponent } from './consultants/consultants.component';

import { ConsultantsService } from './consultants/consultants.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConsultantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ConsultantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
