import { Component, inject } from '@angular/core';
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
import { SettingsService } from 'src/app/core/settings.service';

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
export class SettingsPage {
  private settings = inject(SettingsService);
  allowDelete = this.settings.getAllowDelete();

  onToggle(event: Event) {
    const toggle = event as CustomEvent;
    this.allowDelete = toggle.detail.checked;
    this.settings.setAllowDelete(this.allowDelete);
  }
}
