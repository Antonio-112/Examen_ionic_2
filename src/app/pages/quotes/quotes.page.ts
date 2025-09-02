import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import { ListComponent } from 'src/app/components/list/list.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { QuoteService, Quote } from 'src/app/core/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonText,
    CommonModule,
    FormsModule,
    ListComponent,
    NavComponent,
  ]
})
export class QuotesPage {
  newQuoteText = '';
  newQuoteAuthor = '';
  private quoteService = inject(QuoteService);

  async addQuote() {
    if (this.newQuoteText.trim() && this.newQuoteAuthor.trim()) {
      const quote: Quote = { text: this.newQuoteText, author: this.newQuoteAuthor };
      await this.quoteService.addQuote(quote);

      this.newQuoteText = '';
      this.newQuoteAuthor = '';
    }
  }
}
