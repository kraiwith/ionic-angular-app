import { Component, Input, OnInit } from '@angular/core';
import { Prize } from '../../check-award.page';
import { IonCard, IonCardHeader, IonRow, IonCardTitle, IonCol, IonText, IonCardContent } from '@ionic/angular/standalone';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonText, IonCol, IonCardTitle, IonRow, IonCardHeader, IonCard, DecimalPipe],
})
export class AwardCardComponent implements OnInit {
  @Input() prize: Prize | undefined;
  @Input() color = '';

  constructor() { }

  ngOnInit() { }

}
