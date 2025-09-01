import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have settings icon button on the right', () => {
      const button = fixture.nativeElement.querySelector('ion-buttons[slot="end"] ion-button');
      expect(button?.getAttribute('routerLink')).toBe('/settings');
    });
  });
