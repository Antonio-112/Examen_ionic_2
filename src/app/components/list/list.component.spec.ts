import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { QuoteService } from 'src/app/core/quote.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: QuoteService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    service = TestBed.inject(QuoteService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove item via service', () => {
    const initialLength = service.getAllQuotes().length;
    component.eliminar(0);
    expect(service.getAllQuotes().length).toBe(initialLength - 1);
  });
});
