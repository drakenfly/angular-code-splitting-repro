import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Test1Module } from 'test1';
import { Test2Module } from 'test2';
import { Test3Module } from '@prebuilt/test3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Test1Module,
    Test2Module,
    Test3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
