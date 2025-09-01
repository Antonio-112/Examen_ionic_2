import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [QuoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide delete button by default', () => {
    const button = fixture.nativeElement.querySelector('ion-button');
    expect(button).toBeNull();
  });

  it('should emit deleted when delete button clicked', () => {
    component.allowDelete = true;
    spyOn(component.deleted, 'emit');
    fixture.detectChanges();
    const button: HTMLElement = fixture.nativeElement.querySelector('ion-button');
    button.click();
    expect(component.deleted.emit).toHaveBeenCalled();
  });
});
