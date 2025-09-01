import { TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { SettingsService } from 'src/app/core/settings.service';

describe('HomePage', () => {
  let component: HomePage;
  let settings: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HomePage] });
    settings = TestBed.inject(SettingsService);
    component = TestBed.createComponent(HomePage).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read allowDelete from service', () => {
    settings.setAllowDelete(true);
    component.ionViewWillEnter();
    expect(component.allowDelete).toBe(true);
  });
});
