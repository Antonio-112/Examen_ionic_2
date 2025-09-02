import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
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

export class QuoteComponent implements OnInit, OnDestroy {

  @Input() allowDelete = false;
  @Output() deleted = new EventEmitter<void>();

  private quoteService = inject(QuoteService);
  private currentQuote: Quote | null = this.quoteService.getRandomQuote();
  private sub?: import('rxjs').Subscription;

  get quote(): Quote | null {
    return this.currentQuote;
  }

  getQuote() {
    this.currentQuote = this.quoteService.getRandomQuote();
  }

  onDelete() {
    if (this.currentQuote) {
      this.quoteService.removeQuote(this.currentQuote).then(() => {
        this.deleted.emit();
        this.currentQuote = this.quoteService.getRandomQuote();
      });
    }
  }

  ngOnInit(): void {
    if (!this.currentQuote) {
      this.sub = this.quoteService.quotes$.subscribe(() => {
        if (!this.currentQuote) {
          this.currentQuote = this.quoteService.getRandomQuote();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
