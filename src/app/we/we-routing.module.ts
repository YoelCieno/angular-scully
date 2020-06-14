import { NgModule } from '@angular/core';
import { WeComponent } from './component/we.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: WeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WeRoutingModule { }
