import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './component/blog.component';
import { BlogRootModule } from '../blog-root/blog-root.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, BlogRootModule]
})
export class BlogModule {}
