import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SettingsPage } from './settings.page';
import { SettingsService } from 'src/app/core/settings.service';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let settings: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SettingsPage], providers: [provideRouter([])] });
    settings = TestBed.inject(SettingsService);
    component = TestBed.createComponent(SettingsPage).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle allowDelete', () => {
    const event = { detail: { checked: true } } as CustomEvent;
    component.onToggle(event);
    expect(settings.getAllowDelete()).toBe(true);
  });
});
