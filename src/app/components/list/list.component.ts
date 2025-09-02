import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonContent, IonList, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { QuoteService, Quote } from 'src/app/core/quote.service';


@Component({
  selector: 'app-quote-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonList, IonContent, CommonModule]
})
export class ListComponent {
  private quoteService = inject(QuoteService);
  items$ = this.quoteService.quotes$;

  async eliminar(index: number) {
    const items = this.quoteService.getAllQuotes();
    const quote = items[index];
    await this.quoteService.removeQuote(quote);
  }
}
