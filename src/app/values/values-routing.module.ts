import { NgModule } from '@angular/core';
import { ValuesComponent } from './component/values.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ValuesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ValuesRoutingModule { }
