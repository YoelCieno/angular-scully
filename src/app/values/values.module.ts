import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesComponent } from './component/values.component';
import { ValuesRoutingModule } from './values-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ValuesComponent],
  imports: [
    CommonModule,
    ValuesRoutingModule,
    MatButtonModule
  ],
  exports: [ValuesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ValuesModule { }
