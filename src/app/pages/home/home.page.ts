import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
} from '@ionic/angular/standalone';
import { QuoteComponent } from 'src/app/components/quote/quote.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    QuoteComponent,
    NavComponent,
  ],
})
export class HomePage {
  constructor() {}
}
