
import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
} from '@ionic/angular/standalone';
import { QuoteComponent } from 'src/app/components/quote/quote.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { SettingsService } from 'src/app/core/settings.service';

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
  private settings = inject(SettingsService);
  allowDelete = this.settings.getAllowDelete();

  ionViewWillEnter() {
    this.allowDelete = this.settings.getAllowDelete();
  }

  quoteDeleted() {
    // placeholder for potential future actions when a quote is deleted
  }
}
