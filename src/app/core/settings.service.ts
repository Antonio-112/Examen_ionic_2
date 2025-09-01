import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private allowDelete = false;

  setAllowDelete(value: boolean): void {
    this.allowDelete = value;
  }

  getAllowDelete(): boolean {
    return this.allowDelete;
  }
}
