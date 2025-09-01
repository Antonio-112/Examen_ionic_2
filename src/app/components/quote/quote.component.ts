import { Component, inject } from '@angular/core';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader } from "@ionic/angular/standalone";
import { QuoteService } from '../../core/quote.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, CommonModule],
})

export class QuoteComponent {
  private quoteService = inject(QuoteService);
  quote: { text: string; author: string } | null = this.quoteService.getRandomQuote();

  getQuote() {
    this.quote = this.quoteService.getRandomQuote();
  }
}
