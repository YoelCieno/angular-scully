import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.scss']
})
export class BlogRootComponent implements OnInit {
  public posts$: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) { }
  ngOnInit(): void {
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`));
      })
    );
  }

}
