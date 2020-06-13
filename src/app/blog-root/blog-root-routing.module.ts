import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogRootComponent } from './component/blog-root.component';

const routes: Routes = [{ path: '', component: BlogRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRootRoutingModule { }
