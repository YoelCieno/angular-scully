import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { ValuesModule } from '../values/values.module';
import { ProjectsModule } from '../projects/projects.module';
import { ContactModule } from '../contact/contact.module';
import { WeModule } from '../we/we.module';
import { NewsModule } from '../news/news.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ValuesModule,
    ProjectsModule,
    NewsModule,
    WeModule,
    ContactModule
  ],
  exports: [HomeComponent],
  schemas: []
})

export class HomeModule { }
