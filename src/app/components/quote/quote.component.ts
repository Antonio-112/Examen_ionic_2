import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCard,
  IonCardHeader,
  IonButton,
  IonIcon,
} from "@ionic/angular/standalone";
import { QuoteService, Quote } from '../../core/quote.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

addIcons({ trashOutline });

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  standalone: true,
  imports: [
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonCard,
    IonButton,
    IonIcon,
    CommonModule,
  ],
})

export class QuoteComponent {
  @Input() allowDelete = false;
  @Output() deleted = new EventEmitter<void>();

  private quoteService = inject(QuoteService);
  private currentQuote: Quote | null = this.quoteService.getRandomQuote();

  get quote(): Quote | null {
    return this.currentQuote;
  }

  getQuote() {
    this.currentQuote = this.quoteService.getRandomQuote();
  }

  onDelete() {
    if (this.currentQuote) {
      this.quoteService.removeQuote(this.currentQuote);
      this.deleted.emit();
      this.currentQuote = this.quoteService.getRandomQuote();
    }
  }
}
