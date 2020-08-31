import { NgModule } from '@angular/core';
import { Test3Component } from './test3.component';

import { Test2Module } from 'test2';

@NgModule({
  declarations: [Test3Component],
  imports: [
    Test2Module
  ],
  exports: [Test3Component]
})
export class Test3Module { }
