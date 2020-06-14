import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeComponent } from './component/we.component';
import { WeRoutingModule } from './we-routing.module';

@NgModule({
  declarations: [WeComponent],
  imports: [
    CommonModule,
    WeRoutingModule
  ],
  exports: [WeComponent]
})

export class WeModule { }
