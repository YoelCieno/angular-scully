import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesComponent } from './component/values.component';
import { ValuesRoutingModule } from './values-routing.module';

@NgModule({
  declarations: [ValuesComponent],
  imports: [
    CommonModule,
    ValuesRoutingModule
  ],
  exports: [ValuesComponent]
})

export class ValuesModule { }
