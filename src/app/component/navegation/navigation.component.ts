import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppConstants } from 'src/app/app.constants';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sideNav: MatSidenav;

  public title: string;
  public mobileQuery: MediaQueryList;
  public fillerNav: Array<{ name: string; icon: string; link: string; }>;
  public opened: boolean;

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
    if (!this.mobileQuery.matches) this.opened = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public toggleSideNav(): Promise<MatDrawerToggleResult> {
    if (this.mobileQuery.matches) return this.sideNav.toggle();
  }

  public trackByFn(index: number): number {
    return index;
  }

  public signTo(): Promise<boolean> {
    return;
  }
  
  private toogleMobile(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener = () => {
      this.opened = false;
      this.cd.markForCheck();
    }
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
