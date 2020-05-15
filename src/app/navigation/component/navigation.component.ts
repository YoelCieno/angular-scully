import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit {
  public title = 'Crecer EIP';
  public mode: FormControl;
  
  constructor() { 
    this.mode = new FormControl('over');
  }

  ngOnInit(): void {
  }

}
