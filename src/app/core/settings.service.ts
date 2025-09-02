import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private static readonly ALLOW_DELETE_KEY = 'settings_allow_delete';
  private allowDeleteSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    void this.loadAllowDelete();
  }

  
  readonly allowDelete$ = this.allowDeleteSubject.asObservable();

  setAllowDelete(value: boolean): void {
    this.allowDeleteSubject.next(value);
    
    void Preferences.set({ key: SettingsService.ALLOW_DELETE_KEY, value: JSON.stringify(value) }).catch(() => {});
  }

  getAllowDelete(): boolean {
    return this.allowDeleteSubject.value;
  }

  private async loadAllowDelete(): Promise<void> {
    try {
      const { value } = await Preferences.get({ key: SettingsService.ALLOW_DELETE_KEY });
      if (value != null) {
        this.allowDeleteSubject.next(JSON.parse(value));
      }
    } catch {
      // keep default
    }
  }
}
