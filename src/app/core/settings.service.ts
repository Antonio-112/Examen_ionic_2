import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private static readonly ALLOW_DELETE_KEY = 'settings_allow_delete';
  private allowDeleteSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Load persisted setting on service creation
    this.loadAllowDelete();
  }

  // Observable for components that want to react to changes
  readonly allowDelete$ = this.allowDeleteSubject.asObservable();

  async setAllowDelete(value: boolean): Promise<void> {
    this.allowDeleteSubject.next(value);
    try {
      await Preferences.set({ key: SettingsService.ALLOW_DELETE_KEY, value: JSON.stringify(value) });
    } catch (_) {
      // noop: keep in-memory value even if persistence fails
    }
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
    } catch (_) {
      // If read fails, keep default false
    }
  }
}
