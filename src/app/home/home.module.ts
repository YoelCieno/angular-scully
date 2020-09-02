import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { ValuesModule } from '../values/values.module';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ValuesModule,
    ProjectsModule
  ],
  exports: [HomeComponent],
  schemas: []
})

export class HomeModule { }
