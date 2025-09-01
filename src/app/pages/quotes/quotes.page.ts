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
} from '@ionic/angular/standalone';
import { ListComponent } from 'src/app/components/list/list.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { QuoteService } from 'src/app/core/quote.service';
} from '@ionic/angular/standalone';
import { ListComponent } from 'src/app/components/list/list.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

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

  addQuote() {
    if (this.newQuoteText.trim() && this.newQuoteAuthor.trim()) {
      this.quoteService.addQuote({
        text: this.newQuoteText,
        author: this.newQuoteAuthor,
      });
      this.newQuoteText = '';
      this.newQuoteAuthor = '';
    }
  }
}
