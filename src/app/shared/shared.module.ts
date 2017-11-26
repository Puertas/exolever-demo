import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [],
  declarations: [LoadingComponent],
  exports: [
    CommonModule,
    LoadingComponent,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
