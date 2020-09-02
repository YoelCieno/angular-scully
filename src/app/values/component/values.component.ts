import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ValuesConstants } from '../values.constants';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ValuesComponent implements OnInit {

  public texts: { title: string };

  constructor() { }

  ngOnInit(): void {
    this.texts = { title: ValuesConstants.TEXTS.TITLE };
  }
}
