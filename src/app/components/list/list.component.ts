import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel, IonItem, IonContent, IonList, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { QuoteService } from 'src/app/core/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonList, IonContent, CommonModule],
  providers: [QuoteService]
})
export class ListComponent  implements OnInit {

  

  constructor(private quoteService: QuoteService) {
    this.quoteService = quoteService;
   }

  items = this.quoteService.getAllQuotes();
  ngOnInit() {}

  eliminar(index: number) {
    this.items.splice(index, 1);
  }
}
