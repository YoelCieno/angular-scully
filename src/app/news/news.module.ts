import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './component/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatButtonModule
  ],
  exports: [NewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NewsModule { }
