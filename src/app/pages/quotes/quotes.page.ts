import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
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
    CommonModule,
    FormsModule,
    ListComponent,
    NavComponent,
  ]
})
export class QuotesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
