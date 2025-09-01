import { Component } from '@angular/core';
import { IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [IonToolbar, IonButtons, IonButton, IonIcon, RouterLink],
})
export class NavComponent {}
