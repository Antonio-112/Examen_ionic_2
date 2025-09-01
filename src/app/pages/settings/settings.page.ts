import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonFooter,
} from '@ionic/angular/standalone';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonToggle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    CommonModule,
    FormsModule,
    NavComponent,
  ]
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
