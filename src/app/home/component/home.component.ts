import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private cd: ChangeDetectorRef, 
    private media: MediaMatcher
  ) { }

  ngOnInit(): void {
    this.toogleMobile();
  }

  private toogleMobile(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 47.9375em)');
    this._mobileQueryListener = () => this.cd.markForCheck();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
}
