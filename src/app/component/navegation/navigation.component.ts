import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit, OnDestroy {
  public title: string;
  public mobileQuery: MediaQueryList;
  public fillerNav: Array<{ name: string }>;
  public isMobile: boolean;

  private _mobileQueryListener: () => void;

  constructor(
    private cd: ChangeDetectorRef, 
    private media: MediaMatcher
  ) { 
    this.title = AppConstants.TITLE;
    this.fillerNav = AppConstants.MENU_LIST;
  }

  ngOnInit(): void {
    this.toogleMobile();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public signTo(): Promise<boolean> {
    return;
  }
  
  private toogleMobile(): boolean {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.cd.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (this.mobileQuery.matches) return this.isMobile = true;
    return;
  }
}